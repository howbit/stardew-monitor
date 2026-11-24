/* Web Audio loops use the accepted edited excerpts. Scene changes never alter playback speed. */
(function (root) {
  'use strict';
  class SceneMusicPlayer {
    constructor({ tracks, createContext, fetchAudio, onState = () => {}, volume = .4, fade = 3, resumePoint }) {
      Object.assign(this, { tracks, createContext, fetchAudio, onState, volume, fade });
      this.enabled = false;
      this.desired = null;
      this.active = null;
      this.context = null;
      this.cache = new Map();
      this.voices = new Set();
      this.request = 0;
      this.status = 'off';
      this.resumePoint = resumePoint && Object.hasOwn(tracks, resumePoint.id)
        && Number.isFinite(resumePoint.offset) && resumePoint.offset >= 0 ? resumePoint : null;
    }
    report(status) {
      this.status = status;
      this.onState({ status, enabled: this.enabled, desired: this.desired, playing: this.active?.id || null });
    }
    setScene(id) {
      if (!this.tracks[id] || id === this.desired) return;
      this.desired = id;
      ++this.request;
      if (this.enabled && this.context?.state === 'running') this.playScene();
      else this.report(this.enabled ? 'blocked' : 'off');
    }
    enable() {
      this.enabled = true;
      ++this.request;
      try {
        if (!this.context) {
          this.context = this.createContext();
          this.master = this.context.createGain();
          this.master.gain.value = this.volume;
          this.master.connect(this.context.destination);
          this.context.onstatechange = () => {
            if (!this.enabled) return;
            if (this.context.state === 'running') this.playScene();
            else this.report('blocked');
          };
        }
        // Called synchronously in the button's gesture; reloads can remain suspended.
        if (this.context.state !== 'running') {
          this.report('blocked');
          Promise.resolve(this.context.resume()).catch(() => this.enabled && this.report('blocked'));
        } else this.playScene();
      } catch { this.report('error'); }
    }
    disable() {
      this.enabled = false;
      ++this.request;
      if (this.active) {
        this.resumePoint = this.playbackPoint();
        this.active = null;
      }
      for (const voice of this.voices) this.retire(voice, .18);
      this.report('off');
    }
    setVolume(value) {
      this.volume = Math.max(0, Math.min(1, value));
      if (this.master) this.master.gain.setTargetAtTime(this.volume, this.context.currentTime, .035);
    }
    position(voice) {
      return (voice.offset + this.context.currentTime - voice.started) % voice.source.buffer.duration;
    }
    playbackPoint() {
      if (!this.active) return this.resumePoint;
      return { id: this.active.id, offset: this.position(this.active) };
    }
    ramp(voice, to, duration) {
      const now = this.context.currentTime;
      const prior = voice.envelope;
      const mix = Math.max(0, Math.min(1, (now - prior.time) / (prior.duration || 1)));
      const from = prior.from + (prior.to - prior.from) * mix;
      voice.gain.gain.cancelScheduledValues(now);
      voice.gain.gain.setValueAtTime(from, now);
      voice.gain.gain.linearRampToValueAtTime(to, now + duration);
      voice.envelope = { from, to, time: now, duration };
    }
    retire(voice, duration) {
      this.ramp(voice, 0, duration);
      voice.source.stop(this.context.currentTime + duration + .025);
    }
    async buffer(id) {
      if (this.cache.has(id)) {
        const cached = this.cache.get(id);
        this.cache.delete(id);
        this.cache.set(id, cached);
        return cached;
      }
      const loading = this.fetchAudio(this.tracks[id].file).then(data => this.context.decodeAudioData(data));
      this.cache.set(id, loading);
      while (this.cache.size > 3) this.cache.delete(this.cache.keys().next().value);
      try { return await loading; }
      catch (error) { if (this.cache.get(id) === loading) this.cache.delete(id); throw error; }
    }
    async playScene() {
      const id = this.desired;
      const request = this.request;
      if (!id || !this.enabled || this.context.state !== 'running') return;
      if (this.active?.id === id) { this.report('playing'); return; }
      if (this.loading === request) return;
      this.loading = request;
      this.report('loading');
      try {
        const buffer = await this.buffer(id);
        if (request !== this.request || !this.enabled || this.context.state !== 'running') return;
        const source = this.context.createBufferSource();
        const gain = this.context.createGain();
        const now = this.context.currentTime;
        const offset = this.resumePoint?.id === id ? this.resumePoint.offset % buffer.duration : 0;
        const voice = { id, source, gain, offset, started: now, envelope: { from: 0, to: 0, time: now, duration: 0 } };
        source.buffer = buffer;
        source.loop = true;
        source.loopStart = 0;
        source.loopEnd = buffer.duration;
        gain.gain.value = 0;
        source.connect(gain);
        gain.connect(this.master);
        source.onended = () => { source.disconnect(); gain.disconnect(); this.voices.delete(voice); };
        // Collapse older crossfades quickly so rapid scene changes cannot build up a chorus.
        for (const old of this.voices) this.retire(old, old === this.active ? this.fade : .18);
        source.start(now, offset);
        this.voices.add(voice);
        this.ramp(voice, 1, this.active ? this.fade : .25);
        this.active = voice;
        this.resumePoint = null;
        this.report('playing');
      } catch {
        if (request !== this.request || !this.enabled) return;
        for (const voice of this.voices) this.retire(voice, .18);
        this.active = null;
        this.report('error');
      } finally { if (this.loading === request) this.loading = null; }
    }
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = SceneMusicPlayer;
  else root.SceneMusicPlayer = SceneMusicPlayer;
})(typeof window === 'undefined' ? globalThis : window);
