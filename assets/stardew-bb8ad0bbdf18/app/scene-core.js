(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('./vendor/suncalc.js'), require('./zone-hints.js'));
  } else root.StardewScene = factory(root.SunCalc, root.SceneZoneHints || {});
})(globalThis, function (SunCalc, zoneHints) {
  'use strict';
  const DAY = 86400000;
  const SEASONS = ['winter', 'spring', 'summer', 'autumn'];
  const formatters = new Map();
  function canonicalZone(zone) {
    if (typeof zone !== 'string' || !zone.trim()) return null;
    try { return new Intl.DateTimeFormat('en', { timeZone: zone.trim() }).resolvedOptions().timeZone; }
    catch { return null; }
  }
  function browserZone() {
    try { return canonicalZone(Intl.DateTimeFormat().resolvedOptions().timeZone) || 'UTC'; }
    catch { return 'UTC'; }
  }
  function localParts(date, zone) {
    if (!formatters.has(zone)) formatters.set(zone, new Intl.DateTimeFormat('en-GB', {
      timeZone: zone, year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23'
    }));
    const parts = Object.fromEntries(formatters.get(zone).formatToParts(date)
      .filter(p => p.type !== 'literal').map(p => [p.type, Number(p.value)]));
    return { ...parts, key: `${parts.year}-${parts.month}-${parts.day}` };
  }
  function numberOrNull(value) {
    if (!['number', 'string'].includes(typeof value) ||
        (typeof value === 'string' && !value.trim())) return null;
    const n = Number(value);
    return Number.isFinite(n) ? n : null;
  }
  function coordinates(location) {
    const latitude = numberOrNull(location.latitude), longitude = numberOrNull(location.longitude);
    return latitude !== null && longitude !== null && Math.abs(latitude) <= 90 && Math.abs(longitude) <= 180
      ? { latitude, longitude } : null;
  }
  function validateLocation(location) {
    if (!location || typeof location !== 'object' || Array.isArray(location)) return ['位置配置必须是对象。'];
    const errors = [];
    if (!canonicalZone(location.timeZone)) errors.push('请输入有效的 IANA 时区，例如 Asia/Shanghai。');
    const has = value => value !== undefined && value !== null && String(value).trim() !== '';
    if ((has(location.latitude) || has(location.longitude)) && !coordinates(location)) {
      errors.push('经纬度必须成对填写；纬度为 -90 至 90，经度为 -180 至 180。');
    }
    if (location.hemisphere && !['auto', 'north', 'south'].includes(location.hemisphere)) errors.push('无效的半球设置。');
    if (location.season && !['auto', ...SEASONS].includes(location.season)) errors.push('无效的季节设置。');
    return errors;
  }
  // Collect adjacent solar days, then format/filter in the target civil zone.
  // This also handles UTC+14, UTC-12, DST, and sunrise-only transition days.
  function solarState(now, zone, point, local) {
    if (!SunCalc) return null;
    const center = Date.UTC(local.year, local.month - 1, local.day, 12);
    const events = [];
    for (let offset = -2; offset <= 2; offset++) {
      const times = SunCalc.getTimes(new Date(center + offset * DAY), point.latitude, point.longitude);
      for (const type of ['sunrise', 'sunset']) {
        if (times[type] instanceof Date && Number.isFinite(times[type].getTime())) {
          events.push({ type, date: times[type] });
        }
      }
    }
    events.sort((a, b) => a.date - b.date);
    const previous = events.filter(event => event.date <= now).at(-1);
    const phase = previous ? (previous.type === 'sunrise' ? 'day' : 'night') :
      (SunCalc.getPosition(now, point.latitude, point.longitude).altitude >= -0.833 * Math.PI / 180 ? 'day' : 'night');
    const today = events.filter(event => localParts(event.date, zone).key === local.key);
    const sunrise = today.find(event => event.type === 'sunrise')?.date || null;
    const sunset = today.find(event => event.type === 'sunset')?.date || null;
    return { phase, sunrise, sunset, nextTransition: events.find(event => event.date > now)?.date || null,
      polar: today.length === 0 ? (phase === 'day' ? 'polar-day' : 'polar-night') : null };
  }
  function resolveScene(location = {}, date = new Date()) {
    if (!location || typeof location !== 'object' || Array.isArray(location)) location = {};
    const now = new Date(date);
    if (!Number.isFinite(now.getTime())) throw new TypeError('Invalid scene date');
    const requestedZone = canonicalZone(location.timeZone);
    const timeZone = requestedZone || 'UTC';
    const local = localParts(now, timeZone);
    const point = coordinates(location);
    const manualHemisphere = ['north', 'south'].includes(location.hemisphere) ? location.hemisphere : null;
    const hint = zoneHints[location.timeZone] || zoneHints[timeZone];
    // Equator alone cannot choose a hemisphere; use the hint/default with disclosure.
    const latitudeHemisphere = point && point.latitude !== 0 ? (point.latitude > 0 ? 'north' : 'south') : null;
    const hemisphere = manualHemisphere || latitudeHemisphere || hint || 'north';
    const hemisphereSource = manualHemisphere ? 'manual' : latitudeHemisphere ? 'coordinates' : hint ? 'time-zone-estimate' : 'north-default';
    const manualSeason = SEASONS.includes(location.season) ? location.season : null;
    const season = manualSeason || SEASONS[(Math.floor((local.month % 12) / 3) + (hemisphere === 'south' ? 2 : 0)) % 4];
    const solar = point ? solarState(now, timeZone, point, local) : null;
    return {
      city: typeof location.city === 'string' ? location.city : '', timeZone, timeZoneFallback: !requestedZone,
      now, local, hemisphere, hemisphereSource, season, seasonSource: manualSeason ? 'manual' : 'meteorological',
      tropical: !!point && Math.abs(point.latitude) < 23.44, coordinates: point,
      phase: solar?.phase || (local.hour >= 6 && local.hour < 18 ? 'day' : 'night'),
      daylightSource: solar ? 'solar' : 'fixed-hours',
      sunrise: solar?.sunrise || null, sunset: solar?.sunset || null,
      polar: solar?.polar || null, nextTransition: solar?.nextTransition || null,
      issues: validateLocation(location)
    };
  }
  function createController({ visitor, serverLocations = {}, onChange = () => {}, clock = () => new Date() }) {
    let localVisitor = { ...visitor }, locations = { ...serverLocations }, selectedId = null;
    function refresh() {
      const location = selectedId === null ? localVisitor : (locations[selectedId] || {});
      const state = { ...resolveScene(location, clock()), mode: selectedId === null ? 'visitor' : 'server', serverId: selectedId };
      onChange(state);
      return state;
    }
    return {
      refresh,
      select(id) { selectedId = String(id); return refresh(); },
      reset() { selectedId = null; return refresh(); },
      setVisitor(location) { localVisitor = { ...location }; return refresh(); },
      setServers(next) { locations = { ...next }; return refresh(); },
      get selectedId() { return selectedId; }
    };
  }
  return { canonicalZone, browserZone, localParts, coordinates, validateLocation, resolveScene, createController };
});
