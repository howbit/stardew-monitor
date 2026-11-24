/**
 * CF-Server-Monitor 数据适配层 (Data Adapter)
 * 适配规范: https://github.com/huilang-me/CF-Server-Monitor/blob/main/theme-develop.md
 *
 * 职责:
 * 1. 声明并适配 CF-Server-Monitor 的 REST API 与 WebSocket 实时数据流。
 * 2. 在离线、静态预览、网络失败或未配置后端时，无缝回退至已确认的 6 个示例节点与基准统计，保障回归清单与本地测试 100% 通过。
 * 3. 实现 21 款农场建筑的 DJB2 确定性哈希分配与 localStorage 持久化个性化记忆。
 * 4. 统一管理季节 (season) 与昼夜 (night) 的偏好持久化。
 */

(function (global) {
  'use strict';

  // 21 款经过像素对齐与灯光校准的建筑完整清单
  const BUILDINGS = [
    'beach-3', 'big-shed-3', 'deluxe-coop-3', 'elliott-3', 'farmhouse-3',
    'fish-shop-3', 'island-farmhouse-3', 'junimo-3', 'leah-3', 'log-3',
    'manor-house-3', 'mill-3', 'neighbor-3', 'plank-3', 'rustic-3',
    'shed-3', 'slime-hutch-3', 'stone-3', 'trailer-3', 'witch-hut-3',
    'wizard-tower-3'
  ];

  const DEFAULT_LOCATIONS = {
    'HK-1': { city: '香港', regionCode:'HK', timeZone: 'Asia/Hong_Kong', latitude: 22.3193, longitude: 114.1694 },
    'HK-2': { city: '香港', regionCode:'HK', timeZone: 'Asia/Hong_Kong', latitude: 22.3193, longitude: 114.1694 },
    'RN-1': { city: '洛杉矶', regionCode:'US', timeZone: 'America/Los_Angeles', latitude: 34.0522, longitude: -118.2437 },
    'RN-2': { city: '圣何塞', regionCode:'US', timeZone: 'America/Los_Angeles', latitude: 37.3382, longitude: -121.8863 },
    'C-1':  { city: '法兰克福', regionCode:'DE', timeZone: 'Europe/Berlin', latitude: 50.1109, longitude: 8.6821 },
    'H4':   { city: '特罗姆瑟', regionCode:'NO', timeZone: 'Europe/Oslo', latitude: 69.6492, longitude: 18.9553 }
  };

  const KNOWN_REGION_LOCATIONS = [
    { test: /\bhk\b|hong\s*kong|香港/i, loc: { city: '香港', timeZone: 'Asia/Hong_Kong', latitude: 22.3193, longitude: 114.1694 } },
    { test: /tokyo|东京/i, loc: { city: '东京', timeZone: 'Asia/Tokyo', latitude: 35.6762, longitude: 139.6503 } },
    { test: /\bsg\b|singapore|新加坡/i, loc: { city: '新加坡', timeZone: 'Asia/Singapore', latitude: 1.3521, longitude: 103.8198 } },
    { test: /frankfurt|\bfra\b|法兰克福/i, loc: { city: '法兰克福', timeZone: 'Europe/Berlin', latitude: 50.1109, longitude: 8.6821 } },
    { test: /\bla\b|los\s*angeles|洛杉矶/i, loc: { city: '洛杉矶', timeZone: 'America/Los_Angeles', latitude: 34.0522, longitude: -118.2437 } },
    { test: /\bsj\b|san\s*jose|圣何塞/i, loc: { city: '圣何塞', timeZone: 'America/Los_Angeles', latitude: 37.3382, longitude: -121.8863 } },
    { test: /\bsyd\b|sydney|悉尼/i, loc: { city: '悉尼', timeZone: 'Australia/Sydney', latitude: -33.8688, longitude: 151.2093 } },
    { test: /\blon\b|london|伦敦/i, loc: { city: '伦敦', timeZone: 'Europe/London', latitude: 51.5074, longitude: -0.1278 } },
  ];

  const regionNames = new Intl.DisplayNames([global.farmLocale || 'zh-CN'], {type:'region', fallback:'none'});
  const cityRegions = {'香港':'HK', '东京':'JP', '新加坡':'SG', '法兰克福':'DE', '洛杉矶':'US', '圣何塞':'US', '悉尼':'AU', '伦敦':'GB'};

  function placeText(value) {
    const text = typeof value === 'string' ? value.trim() : '';
    return /^(?:xx|zz|unknown|n\/a|—|-|[\da-f]{8}(?:-[\da-f]{4}){3}-[\da-f]{12})$/i.test(text) ? '' : text;
  }

  function resolveServerLocation(raw, siteConfig, origin) {
    const id = raw.id;
    const options = siteConfig?.theme_options?.stardew_scene || siteConfig?.stardew_scene;
    const locations = options?.serverLocations;
    const configured = locations?.[origin + '::' + id] || locations?.[id] || {};
    const region = placeText(raw.region);
    const code = /^[a-z]{2}$/i.test(region) ? region.toUpperCase() : '';
    const regionLabel = code ? regionNames.of(code) || code : region;
    const city = placeText(configured.city) || placeText(raw.city);
    // A two-letter country code can cover several cities and time zones.
    const cityText = city || (!code && region) || raw.name || '';
    const hint = KNOWN_REGION_LOCATIONS.find(item => item.test.test(cityText) &&
      (city || !code || cityRegions[item.loc.city] === code))?.loc
      || (!city && (code === 'HK' || code === 'SG') ? KNOWN_REGION_LOCATIONS.find(item => item.test.test(code))?.loc : null);
    const core = global.StardewScene;
    const point = core.coordinates(configured) || core.coordinates(raw) || core.coordinates(hint || {});
    const zone = [configured.timeZone, raw.time_zone, raw.timeZone, hint?.timeZone].find(value => core.canonicalZone(value));
    return {...configured, latitude:point?.latitude, longitude:point?.longitude,
      city:city || hint?.city || regionLabel, timeZone:zone, regionCode:code || cityRegions[hint?.city] || ''};
  }

  // 基准已确认的 6 个样例节点（离线/预览保证与原先视觉 100% 逐字逐像素一致）
  const DEFAULT_NODES = [
    { id: 'HK-1', city: '香港', location: DEFAULT_LOCATIONS['HK-1'], online: true, days: 66, ip: 'IPV4/6', building: 'log-3', cpu: 0, ram: 17.28, disk: 12.18, use: 28.86, load: ['0.00', '0.00', '0.00'], net: ['3.9 KB/s', '4.9 KB/s'], trf: ['287.5 GB', '289.8 GB', '2 TB'], ping: [['CT', 35], ['CU', 32], ['CM', 23], ['BGP', 1]] },
    { id: 'HK-2', city: '香港', location: DEFAULT_LOCATIONS['HK-2'], online: true, days: 199, ip: 'IPV4', building: 'stone-3', cpu: 1, ram: 16.41, disk: 12.10, use: 7.79, load: ['0.00', '0.00', '0.00'], net: ['3.8 KB/s', '1.8 KB/s'], trf: ['120.1 GB', '113.7 GB', '2.9 TB'], ping: [['CT', 317], ['CU', 331], ['CM', 19], ['BGP', 1]] },
    { id: 'RN-1', city: '洛杉矶', location: DEFAULT_LOCATIONS['RN-1'], online: true, days: 75, ip: 'IPV4', building: 'mill-3', cpu: 0, ram: 13.70, disk: 4.92, use: 3.82, load: ['0.00', '0.00', '0.00'], net: ['132 B/s', '121 B/s'], trf: ['56.4 GB', '58.4 GB', '2.9 TB'], ping: [['CT', 174], ['CU', 190], ['CM', 268], ['BGP', 1]] },
    { id: 'RN-2', city: '圣何塞', location: DEFAULT_LOCATIONS['RN-2'], online: true, days: 53, ip: 'IPV4', building: 'rustic-3', cpu: 0, ram: 31.64, disk: 17.11, use: 0.72, load: ['0.00', '0.00', '0.00'], net: ['447 B/s', '1.8 KB/s'], trf: ['7.2 GB', '7.1 GB', '2 TB'], ping: [['CT', 159], ['CU', 173], ['CM', 224], ['BGP', 1]] },
    { id: 'C-1', city: '法兰克福', location: DEFAULT_LOCATIONS['C-1'], online: true, days: 39, ip: 'IPV4', building: 'beach-3', cpu: 1.01, ram: 16.87, disk: 9.98, use: 8.20, load: ['0.02', '0.05', '0.00'], net: ['29 KB/s', '24.6 KB/s'], trf: ['90.3 GB', '73.8 GB', '2 TB'], ping: [['CT', 171], ['CU', 180], ['CM', 285], ['BGP', 1]] },
    { id: 'H4', city: '特罗姆瑟', location: DEFAULT_LOCATIONS['H4'], online: false, days: null, ip: '', building: 'plank-3', cpu: 0, ram: 0, disk: 0, use: null, load: ['0.00', '0.00', '0.00'], net: ['0 B/s', '0 B/s'], trf: ['0 B', '0 B', '—'], ping: [['CT', null], ['CU', null], ['CM', null], ['BGP', null]] },
  ];

  const DEFAULT_STATS = {
    realtime: '487.5',
    realtimeUnit: 'MB/s',
    realtimeDetail: '↑ 107.8　↓ 379.7 MB/s',
    total: '6',
    online: '5',
    offline: '1'
  };

  // 丢包率仅供标为“示例数据”的静态农场预览使用。
  const DEMO_LOSS_PERCENT = {
    'HK-1':[0,0,0,0], 'HK-2':[1.5,2,0,0], 'RN-1':[0,0.5,1,0],
    'RN-2':[0,0,0.5,0], 'C-1':[0,0,1,0]
  };

  function demoRouteHistory(node) {
    const now = Date.now();
    const offsets = [0,3,-2,-1,4,6,-3,1,0,5,2,7,-2,3,1,0,4,-1,-3,0];
    return Object.fromEntries(node.ping.map(([label,delay],i) => {
      const loss = DEMO_LOSS_PERCENT[node.id]?.[i];
      if (!node.online) return [label,{}];
      const stamps = offsets.map((_,n) => now-(19-n)*360000);
      return [label,{loss,
        points:stamps.map((ts,n) => [ts,Math.max(0,delay+offsets[n])]),
        lossPoints:stamps.map((ts,n) => [ts,n === 19 || !loss ? loss : Math.max(0,loss+offsets[(n+i)%20]/4)])}];
    }));
  }

  const STORAGE_KEYS = {
    BUILDINGS: 'cfsm_stardew_buildings',
    SEASON: 'cfsm_stardew_season',
    NIGHT: 'cfsm_stardew_night',
    JWT: 'cfsm_jwt'
  };

  // 确定性节点哈希分配算法 (DJB2)
  function getStableBuildingForNode(nodeId, manualOverrides) {
    if (manualOverrides && manualOverrides[nodeId]) {
      return manualOverrides[nodeId];
    }
    let hash = 5381;
    const str = String(nodeId || '');
    for (let i = 0; i < str.length; i++) {
      hash = (((hash << 5) + hash) + str.charCodeAt(i)) | 0;
    }
    const index = Math.abs(hash) % BUILDINGS.length;
    return BUILDINGS[index];
  }

  function metric(value) {
    if (value === undefined || value === null || typeof value === 'boolean' || String(value).trim() === '') return null;
    const n = Number(value);
    return Number.isFinite(n) && n >= 0 ? n : null;
  }

  function timestamp(value) {
    const n = metric(value);
    if (n !== null) return n > 0 ? (n < 1e11 ? n * 1000 : n) : null;
    return typeof value === 'string' ? Date.parse(value) || null : null;
  }

  function enabled(value) {
    return ![0,'0',false,'false'].includes(value);
  }

  function billingPrice(server, config) {
    if (!enabled(config?.show_price)) return null;
    const raw = String(server.price ?? '').trim();
    if (!raw) return null;
    if (Number(raw) === -1 || Number(raw) === 0) return global.farmText?.('免费') || '免费';
    if (!Number.isFinite(Number(raw))) return raw;
    const cycles = {month:'月',quarter:'季',half_year:'半年',year:'年',two_years:'2年',three_years:'3年',four_years:'4年',five_years:'5年'};
    const cycle = cycles[server.billing_cycle] || server.billing_cycle;
    return (server.currency || '') + raw + (cycle ? '/' + (global.farmText?.(cycle) || cycle) : '');
  }

  function routeSamples(series, key) {
    if (!Array.isArray(series)) return [];
    return series.filter(p => p && Object.hasOwn(p,key) && p[key] !== false && timestamp(p.ts) !== null)
      .map(p => [timestamp(p.ts),metric(p[key])]).sort((a,b) => a[0]-b[0]);
  }

  function rememberRates(server, samples) {
    if (!Array.isArray(samples) || !samples.length) return;
    const recent = new Map(server.rateSamples || []);
    for (const sample of samples) {
      const data = sample.data || sample.payload || sample.metrics || {};
      const stamp = timestamp(sample.ts);
      const up = metric(data.net_out_speed), down = metric(data.net_in_speed);
      if (stamp !== null && (up !== null || down !== null)) recent.set(stamp, [up, down]);
    }
    server.rateSamples = [...recent].sort((a,b) => a[0]-b[0]).slice(-30);
  }

  function capacity(used, total) {
    return metric(used) !== null && metric(total) > 0
      ? formatBytes(used * 1048576) + ' / ' + formatBytes(total * 1048576) : '';
  }

  function formatSpeed(bytesPerSec) {
    const bytes = metric(bytesPerSec);
    if (bytes === null) return '—';
    if (bytes <= 0) return '0 B/s';
    if (bytes < 1024) return bytes.toFixed(0) + ' B/s';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB/s';
    if (bytes < 1024 * 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(1) + ' MB/s';
    return (bytes / (1024 * 1024 * 1024)).toFixed(2) + ' GB/s';
  }

  function formatBytes(totalBytes) {
    const bytes = metric(totalBytes);
    if (bytes === null) return '—';
    if (bytes <= 0) return '0 B';
    if (bytes < 1024) return bytes.toFixed(0) + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    if (bytes < 1024 ** 3) return (bytes / 1024 ** 2).toFixed(1) + ' MB';
    if (bytes < 1024 ** 4) return (bytes / 1024 ** 3).toFixed(1) + ' GB';
    return (bytes / (1024 * 1024 * 1024 * 1024)).toFixed(1) + ' TB';
  }

  function parseTrafficLimitBytes(limitStr) {
    if (metric(limitStr) !== null) return Number(limitStr) * 1024 ** 3;
    if (typeof limitStr !== 'string') return 0;
    const match = limitStr.trim().match(/^([\d.]+)\s*([KMGTP]?B?)$/i);
    if (!match) return 0;
    const val = parseFloat(match[1]);
    const unit = match[2].toUpperCase();
    if (unit.startsWith('T')) return val * 1024 * 1024 * 1024 * 1024;
    if (unit.startsWith('G')) return val * 1024 * 1024 * 1024;
    if (unit.startsWith('M')) return val * 1024 * 1024;
    if (unit.startsWith('K')) return val * 1024;
    return val;
  }

  function loadBuildingOverrides() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.BUILDINGS);
      const entries = JSON.parse(raw || '{}');
      return Object.fromEntries(Object.entries(entries).filter(([, id]) => BUILDINGS.includes(id)));
    } catch {
      return {};
    }
  }

  function saveBuildingOverrides(overrides) {
    try {
      localStorage.setItem(STORAGE_KEYS.BUILDINGS, JSON.stringify(overrides));
    } catch {
      // 容错处理
    }
  }

  class CFServerMonitorAdapter {
    constructor() {
      this.listeners = [];
      this.buildingOverrides = loadBuildingOverrides();
      this.siteConfig = null;
      this.rawServers = [];
      this.isLive = false;
      this.lastError = null;
      this.ws = null;
      this.wsTimeoutTimer = null;
      this.connection = 'loading';
      this.retryDelay = 2000;
      this.retryCount = 0;
      this.paused = false;
      this.apiBase = this.detectApiBase();
      this.liveOnly = document.documentElement?.dataset?.cfsmMode === 'live';
      this.currentNodes = [];
      if (!this.liveOnly) this.currentNodes = this.demoNodes();
      this.currentStats = this.liveOnly
        ? {realtime:'—', realtimeUnit:'', realtimeDetail:'', total:'—', online:'—', offline:'—'}
        : {...DEFAULT_STATS};
    }

    demoNodes() {
      return DEFAULT_NODES.map(node => {
        const metadata = this.getMockServerDetail(node.id, node);
        const [rx,tx,cap] = node.trf;
        const used = parseTrafficLimitBytes(rx) + parseTrafficLimitBytes(tx);
        return {...node, building:this.buildingOverrides[node.id] || node.building, demo:true, os:metadata.os, arch:metadata.arch, cores:metadata.cores,
          ramCapacity:capacity(metadata.ramUsedMB,metadata.ramTotalMB), diskCapacity:capacity(metadata.diskUsedMB,metadata.diskTotalMB),
          tcp:metadata.tcpConn, udp:metadata.udpConn, expireDate:metadata.expireDate,
          price:metadata.price, trafficMode:'上下行合计', periodUsed:formatBytes(used),
          routeData:demoRouteHistory(node),
          remaining:cap === '—' ? null : formatBytes(Math.max(0,parseTrafficLimitBytes(cap)-used))};
      });
    }

    detectApiBase() {
      const meta = document.querySelector('meta[name="apiBase"]');
      if (meta && meta.content && meta.content.trim()) {
        const first = meta.content.split(',')[0].trim();
        return first.replace(/\/+$/, '');
      }
      if (typeof location !== 'undefined' && location.origin && location.origin.startsWith('http')) {
        return location.origin;
      }
      return '';
    }

    requestHeaders() {
      const sameSite = this.apiBase === location.origin;
      const token = (sameSite && localStorage.getItem('jwt_token')) || localStorage.getItem(STORAGE_KEYS.JWT);
      const verified = sameSite && localStorage.getItem('turnstile_verified');
      const headers = {};
      if (token) headers.Authorization = 'Bearer ' + token;
      if (verified) headers['X-Turnstile-Verified'] = verified;
      return headers;
    }

    getBuildings() {
      return BUILDINGS;
    }

    getNodes() {
      return this.currentNodes;
    }

    getStats() {
      return this.currentStats;
    }

    getSavedSeason() {
      const param = new URLSearchParams(location.search).get('season');
      if (param && ['auto', 'spring', 'summer', 'fall', 'winter'].includes(param)) {
        return param;
      }
      try {
        const v2 = localStorage.getItem('cfsm_stardew_season_v2');
        if (v2 && ['auto', 'spring', 'summer', 'fall', 'winter'].includes(v2)) {
          return v2;
        }
        const stored = localStorage.getItem(STORAGE_KEYS.SEASON);
        if (stored && ['auto', 'spring', 'summer', 'fall', 'winter'].includes(stored)) {
          // 如果旧版缓存了默认的 spring 且尚未有 v2 显式选择，自动迁移至 auto 天时联动
          if (stored === 'spring') return 'auto';
          return stored;
        }
      } catch {}
      return 'auto';
    }

    saveSeason(season) {
      try {
        localStorage.setItem('cfsm_stardew_season_v2', season);
        localStorage.setItem(STORAGE_KEYS.SEASON, season);
      } catch {}
    }

    getSavedNight() {
      const param = new URLSearchParams(location.search).get('night');
      if (param !== null) {
        return param === '1' || param === 'true';
      }
      try {
        const stored = localStorage.getItem(STORAGE_KEYS.NIGHT);
        if (stored !== null) {
          return stored === 'true';
        }
      } catch {}
      return false;
    }

    saveNight(isNight) {
      try {
        localStorage.setItem(STORAGE_KEYS.NIGHT, String(isNight));
      } catch {}
    }

    setBuildingOverride(nodeId, building) {
      const found = this.currentNodes.find(n => (n.rawId || n.id) === nodeId) || this.currentNodes.find(n => n.id === nodeId);
      if (!found || (building !== null && !BUILDINGS.includes(building))) return;
      const key = found.rawId || found.id;
      if (building === null) {
        delete this.buildingOverrides[key];
        delete this.buildingOverrides[found.id];
      } else this.buildingOverrides[key] = building;
      saveBuildingOverrides(this.buildingOverrides);
      found.building = building || (found.demo ? DEFAULT_NODES.find(n => n.id === key)?.building : null) || getStableBuildingForNode(key);
      this.notify();
    }

    subscribe(fn) {
      if (typeof fn === 'function') {
        this.listeners.push(fn);
      }
      return () => {
        this.listeners = this.listeners.filter(cb => cb !== fn);
      };
    }

    notify() {
      const state = {
        nodes: this.currentNodes,
        stats: this.currentStats,
        isLive: this.isLive,
        error: this.lastError,
        siteConfig: this.siteConfig
      };
      for (const listener of this.listeners) {
        try {
          listener(state);
        } catch (e) {
          console.warn('[cfsm-adapter] Listener error:', e);
        }
      }
    }

    normalizeServer(server) {
      const config = this.siteConfig || {};
      const customCt = config.custom_ct_name || 'CT';
      const customCu = config.custom_cu_name || 'CU';
      const customCm = config.custom_cm_name || 'CM';
      const customBd = config.custom_bd_name || 'BGP';

      const lastUpdated = timestamp(server.report_timestamp ?? server.last_updated ?? server.timestamp);
      const isOnline = server.is_online != null ? enabled(server.is_online)
        : lastUpdated !== null && Date.now() - lastUpdated < 300000;
      const bootTime = timestamp(server.boot_time);
      const days = bootTime ? Math.max(0, Math.floor((Date.now() - bootTime) / 86400000)) : null;
      const v4 = Number(server.ip_v4) === 1, v6 = Number(server.ip_v6) === 1;
      const ip = v4 && v6 ? 'IPV4/6' : v4 ? 'IPV4' : v6 ? 'IPV6' : '';
      const rawId = String(server.id || '');
      const displayId = String(server.name || server.id || 'Node');
      const building = this.buildingOverrides[rawId] ||
        this.buildingOverrides[displayId] ||
        getStableBuildingForNode(rawId || displayId, this.buildingOverrides);

      const cpu = metric(server.cpu);
      const ram = metric(server.ram_total) > 0 && metric(server.ram_used) !== null ? 100 * server.ram_used / server.ram_total : null;
      const disk = metric(server.disk_total) > 0 && metric(server.disk_used) !== null ? 100 * server.disk_used / server.disk_total : null;
      const rx = metric(server.net_rx_monthly), tx = metric(server.net_tx_monthly);
      const showQuota = enabled(config.show_tf);
      const limit = showQuota ? parseTrafficLimitBytes(server.traffic_limit) : 0;
      const unlimited = showQuota && metric(server.traffic_limit) === 0;
      const both = rx !== null && tx !== null;
      const modes = {dl:'仅下行',ul:'仅上行',max:'上下取大',total:'上下行合计'};
      const mode = Object.hasOwn(modes,server.traffic_calc_type) ? server.traffic_calc_type : 'total';
      const used = {dl:rx, ul:tx, max:both ? Math.max(rx,tx) : null, total:both ? rx + tx : null}[mode];
      const use = limit > 0 && used != null ? 100 * used / limit : null;
      const load = String(server.load_avg || '').trim().split(/[ ,]+/).map(metric);
      const routes = [['ct',customCt],['cu',customCu],['cm',customCm],['bd',customBd],
        ...[1,2,3,4].map(i => ['node_'+i, server['node_'+i+'_name'] || config['node_'+i+'_name'] || '节点 '+i])];
      const ping = [], routeData = Object.create(null);
      for (const [key,label] of routes) {
        const value = server['ping_'+key];
        if (value === false || value === 'false' || value === undefined) continue;
        ping.push([label,metric(value)]);
        const history = enabled(config.show_three_net_details);
        routeData[label] = {loss:metric(server['loss_'+key]),
          points:history ? routeSamples(server.ping,key) : [],
          lossPoints:history ? routeSamples(server.loss,key) : []};
      }
      const loc = resolveServerLocation(server, this.siteConfig, this.apiBase);

      return {
        id: displayId,
        rawId: rawId,
        city: loc.city || '地区未配置',
        os: server.os || server.platform || '',
        group: server.server_group, remark:server.public_remark,
        tags: String(server.tags ?? '').split(',').map(tag => tag.trim()).filter(Boolean),
        price:billingPrice(server, config),
        rateSamples:server.rateSamples,
        arch: server.arch || '',
        location: loc,
        online: isOnline,
        days: days,
        ip: ip,
        building: building,
        cpu, ram, disk, lastUpdated, bootTime, routeData,
        ramCapacity:capacity(server.ram_used,server.ram_total), diskCapacity:capacity(server.disk_used,server.disk_total),
        cores:metric(server.cpu_cores), tcp:metric(server.tcp_conn), udp:metric(server.udp_conn),
        periodUsed:formatBytes(used), trafficMode:showQuota ? modes[mode] : null,
        remaining:limit > 0 && used != null ? formatBytes(Math.max(0,limit-used)) : unlimited ? '∞' : null,
        unlimited, expireDate:enabled(config.show_expire) ? server.expire_date : null,
        use: use,
        load: load.length === 3 && load.every(v => v !== null) ? load.map(v => v.toFixed(2)) : null,
        net: [formatSpeed(server.net_in_speed),formatSpeed(server.net_out_speed)],
        trf: [formatBytes(rx),formatBytes(tx),limit > 0 ? formatBytes(limit) : '—'],
        ping: ping
      };
    }

    getServerLocation(nodeId) {
      const node = this.currentNodes.find(n => n.rawId === nodeId) || this.currentNodes.find(n => n.id === nodeId);
      if (node && node.location) return node.location;
      if (!this.liveOnly && !this.isLive && DEFAULT_LOCATIONS[nodeId]) return DEFAULT_LOCATIONS[nodeId];
      return resolveServerLocation({id:nodeId}, this.siteConfig, this.apiBase);
    }

    getAllServerLocations() {
      const map = {};
      for (const n of this.currentNodes) {
        map[n.rawId || n.id] = this.getServerLocation(n.rawId || n.id);
      }
      return map;
    }

    updateStatsFromNodes() {
      const ids = new Set(this.currentNodes.filter(n => n.online).map(n => n.rawId));
      const online = this.rawServers.filter(s => ids.has(String(s.id)));
      const combined = key => {
        const values = online.map(s => metric(s[key]));
        return values.includes(null) ? null : values.reduce((sum, value) => sum + value, 0);
      };
      this.updateStatsFromPayload({globalSpeedIn:combined('net_in_speed'), globalSpeedOut:combined('net_out_speed')});
    }

    updateStatsFromPayload(statsPayload) {
      if (!statsPayload) return;
      const speedIn = metric(statsPayload.globalSpeedIn);
      const speedOut = metric(statsPayload.globalSpeedOut);
      const totalSpeed = speedIn + speedOut;

      let speedDisplay = '0.0';
      let speedUnit = 'B/s';
      if (totalSpeed >= 1024 * 1024 * 1024) {
        speedDisplay = (totalSpeed / (1024 * 1024 * 1024)).toFixed(1);
        speedUnit = 'GB/s';
      } else if (totalSpeed >= 1024 * 1024) {
        speedDisplay = (totalSpeed / (1024 * 1024)).toFixed(1);
        speedUnit = 'MB/s';
      } else if (totalSpeed >= 1024) {
        speedDisplay = (totalSpeed / 1024).toFixed(1);
        speedUnit = 'KB/s';
      } else {
        speedDisplay = totalSpeed.toFixed(0);
        speedUnit = 'B/s';
      }

      this.currentStats = {
        realtime: speedIn === null || speedOut === null ? '—' : speedDisplay,
        realtimeUnit: speedIn === null || speedOut === null ? '' : speedUnit,
        realtimeDetail: `↑ ${formatSpeed(speedOut)}　↓ ${formatSpeed(speedIn)}`,
        total: String(statsPayload.total !== undefined ? statsPayload.total : this.currentNodes.length),
        online: String(statsPayload.online !== undefined ? statsPayload.online : this.currentNodes.filter(n => n.online).length),
        offline: String(statsPayload.offline !== undefined ? statsPayload.offline : this.currentNodes.filter(n => !n.online).length)
      };

      if (typeof global.updateStats === 'function') {
        global.updateStats(this.currentStats);
      }
    }

    getMockServerDetail(nodeId, node) {
      const id = node?.id || nodeId;
      const mockDatabase = {
        'HK-1': {
          cpuModel: 'Intel(R) Xeon(R) Platinum 8375C @ 2.80GHz',
          cores: 2,
          arch: 'x86_64',
          os: 'Ubuntu 22.04.4 LTS',
          kernel: 'Linux 5.15.0-105-generic',
          ramTotalMB: 2048,
          ramUsedMB: 354,
          swapTotalMB: 1024,
          swapUsedMB: 64,
          diskTotalMB: 40960,
          diskUsedMB: 4987,
          diskIo: { read_bps: 2516582, write_bps: 1153433, read_iops: 48, write_iops: 22, await_ms: 0.8, util: 2.4 },
          tcpConn: 46,
          udpConn: 8,
          processes: 118,
          price: '¥35.00/月',
          expireDate: '2027-03-15',
          historyPoints: [1.2, 0.8, 2.4, 1.1, 0.5, 3.2, 1.8, 0.4, 0.2, 1.5, 0.9, 2.1, 0.6, 1.4, 0.7, 1.9, 0.5, 0.8, 1.2, 0.3, 0.0, 1.1, 0.4, 0.0]
        },
        'HK-2': {
          cpuModel: 'AMD EPYC 7763 64-Core Processor',
          cores: 1,
          arch: 'x86_64',
          os: 'Debian GNU/Linux 12 (bookworm)',
          kernel: 'Linux 6.1.0-21-amd64',
          ramTotalMB: 1024,
          ramUsedMB: 168,
          swapTotalMB: 512,
          swapUsedMB: 0,
          diskTotalMB: 25600,
          diskUsedMB: 3098,
          diskIo: { read_bps: 1245184, write_bps: 845210, read_iops: 32, write_iops: 18, await_ms: 1.1, util: 1.8 },
          tcpConn: 28,
          udpConn: 4,
          processes: 92,
          price: '$2.50/月',
          expireDate: '2026-11-20',
          historyPoints: [0.8, 1.4, 1.1, 2.0, 1.2, 0.9, 1.5, 0.7, 1.0, 1.8, 0.6, 1.2, 1.5, 0.8, 1.1, 0.9, 1.3, 1.0, 0.7, 1.4, 0.8, 1.2, 0.9, 1.0]
        },
        'RN-1': {
          cpuModel: 'AMD Ryzen 9 7950X 16-Core Processor',
          cores: 2,
          arch: 'x86_64',
          os: 'AlmaLinux 9.4 (Seafoam Ocelot)',
          kernel: 'Linux 5.14.0-427.18.1.el9_4.x86_64',
          ramTotalMB: 2048,
          ramUsedMB: 281,
          swapTotalMB: 1024,
          swapUsedMB: 0,
          diskTotalMB: 51200,
          diskUsedMB: 2519,
          diskIo: { read_bps: 512000, write_bps: 204800, read_iops: 14, write_iops: 6, await_ms: 0.5, util: 0.8 },
          tcpConn: 18,
          udpConn: 2,
          processes: 105,
          price: '$12.00/年',
          expireDate: '2027-01-08',
          historyPoints: [0.2, 0.1, 0.4, 0.1, 0.3, 0.5, 0.2, 0.1, 0.0, 0.2, 0.1, 0.3, 0.1, 0.2, 0.0, 0.1, 0.2, 0.1, 0.3, 0.1, 0.0, 0.1, 0.0, 0.0]
        },
        'RN-2': {
          cpuModel: 'Intel(R) Core(TM) i9-13900K',
          cores: 2,
          arch: 'x86_64',
          os: 'Ubuntu 24.04 LTS (Noble Numbat)',
          kernel: 'Linux 6.8.0-38-generic',
          ramTotalMB: 4096,
          ramUsedMB: 1296,
          swapTotalMB: 2048,
          swapUsedMB: 12,
          diskTotalMB: 81920,
          diskUsedMB: 14018,
          diskIo: { read_bps: 4096000, write_bps: 3145728, read_iops: 82, write_iops: 44, await_ms: 0.7, util: 3.1 },
          tcpConn: 54,
          udpConn: 12,
          processes: 142,
          price: '$18.50/年',
          expireDate: '2026-12-30',
          historyPoints: [0.4, 0.6, 0.2, 0.8, 0.3, 0.5, 0.7, 0.2, 0.1, 0.4, 0.3, 0.6, 0.2, 0.5, 0.3, 0.4, 0.2, 0.3, 0.5, 0.2, 0.1, 0.3, 0.2, 0.0]
        },
        'C-1': {
          cpuModel: 'AMD EPYC 9654 96-Core Processor',
          cores: 4,
          arch: 'x86_64',
          os: 'Debian GNU/Linux 12 (bookworm)',
          kernel: 'Linux 6.1.0-22-amd64',
          ramTotalMB: 8192,
          ramUsedMB: 1382,
          swapTotalMB: 4096,
          swapUsedMB: 0,
          diskTotalMB: 163840,
          diskUsedMB: 16351,
          diskIo: { read_bps: 8388608, write_bps: 5242880, read_iops: 124, write_iops: 68, await_ms: 0.4, util: 4.2 },
          tcpConn: 96,
          udpConn: 24,
          processes: 188,
          price: '€6.90/月',
          expireDate: '2027-05-01',
          historyPoints: [1.2, 1.5, 0.9, 1.8, 1.1, 1.6, 2.1, 1.4, 0.8, 1.3, 1.0, 1.7, 1.2, 1.5, 1.1, 1.4, 1.2, 1.0, 1.6, 1.1, 0.9, 1.3, 1.1, 1.01]
        },
        'H4': {
          cpuModel: 'Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          cores: 1,
          arch: 'x86_64',
          os: 'CentOS Linux release 7.9.2009 (Core)',
          kernel: 'Linux 3.10.0-1160.el7.x86_64',
          ramTotalMB: 1024,
          ramUsedMB: 0,
          swapTotalMB: 512,
          swapUsedMB: 0,
          diskTotalMB: 20480,
          diskUsedMB: 0,
          diskIo: null,
          tcpConn: 0,
          udpConn: 0,
          processes: 0,
          price: '—',
          expireDate: '—',
          historyPoints: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
      };

      const mock = mockDatabase[id] || {
        cpuModel: 'Intel(R) Xeon(R) CPU',
        cores: 2,
        arch: 'x86_64',
        os: 'Linux',
        kernel: 'Generic Kernel',
        ramTotalMB: 2048,
        ramUsedMB: 512,
        swapTotalMB: 1024,
        swapUsedMB: 0,
        diskTotalMB: 40960,
        diskUsedMB: 8192,
        diskIo: null,
        tcpConn: 10,
        udpConn: 2,
        processes: 50,
        price: '—',
        expireDate: '—',
        historyPoints: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
      };

      return {
        ...node,
        id: id,
        rawId: node?.rawId || id,
        city: node?.city || (DEFAULT_LOCATIONS[id] ? DEFAULT_LOCATIONS[id].city : id),
        location: this.getServerLocation(id),
        online: node?.online ?? false,
        building: node?.building || 'farmhouse-3',
        demo:true, load:node?.load,
        cpuModel: mock.cpuModel,
        cores: mock.cores,
        arch: mock.arch,
        os: mock.os,
        kernel: mock.kernel,
        days: node?.days ?? null,
        ip: node?.ip || '',
        ramTotalMB: mock.ramTotalMB,
        ramUsedMB: mock.ramUsedMB,
        swapTotalMB: mock.swapTotalMB,
        swapUsedMB: mock.swapUsedMB,
        diskTotalMB: mock.diskTotalMB,
        diskUsedMB: mock.diskUsedMB,
        diskIo: mock.diskIo,
        tcpConn: mock.tcpConn,
        udpConn: mock.udpConn,
        processes: mock.processes,
        price: mock.price,
        expireDate: mock.expireDate,
        netInSpeed: node?.net ? node.net[0] : '0 B/s',
        netOutSpeed: node?.net ? node.net[1] : '0 B/s',
        netRxTotal: node?.trf ? node.trf[0] : '0 B',
        netTxTotal: node?.trf ? node.trf[1] : '0 B',
        trafficLimit: node?.trf ? node.trf[2] : '—',
        ping: node?.ping || [],
        history: mock.historyPoints.map((cpuVal, idx) => ({
          ts: Date.now() - (24 - idx) * 3600000,
          cpu: cpuVal,
          ram: node?.ram ?? null
        }))
      };
    }

    init() {
      if (!this.boundEvents) {
        const resume = () => { if (!document.hidden && !this.paused) this.refresh(); };
        document.addEventListener('visibilitychange', () => {
          if (document.hidden) this.disconnect();
          else resume();
        });
        global.addEventListener?.('online', resume);
        global.addEventListener?.('offline', () => {
          this.disconnect();
          if (this.isLive && !this.paused) this.connection = 'stale';
          this.notify();
        });
        global.addEventListener?.('storage', event => {
          if (['jwt_token', 'turnstile_verified'].includes(event.key) || event.key === null) resume();
        });
        this.boundEvents = true;
      }
      if (this.connection === 'auth') this.siteConfig = null;
      this.retryCount = 0;
      this.paused = false;
      return this.refresh();
    }

    disconnect() {
      clearTimeout(this.syncTimer);
      clearTimeout(this.wsTimeoutTimer);
      clearTimeout(this.renderTimer);
      this.renderTimer = null;
      const ws = this.ws;
      this.ws = null;
      if (ws) ws.close();
    }

    schedule(delay) {
      clearTimeout(this.syncTimer);
      if (document.hidden || this.paused || (!this.liveOnly && !this.isLive)) return;
      this.syncTimer = setTimeout(() => this.isLive ? this.connectWebSocket() : this.refresh(), delay);
    }

    retryLater() {
      if (this.retryCount >= 6) return;
      this.retryCount += 1;
      this.schedule(this.retryDelay);
      this.retryDelay = Math.min(this.retryDelay * 2, 60000);
    }

    refresh() {
      if (this.pending) return this.pending;
      clearTimeout(this.syncTimer);
      this.duringSnapshot = [];
      this.pending = this.readSnapshot().finally(() => {
        this.pending = null;
        this.duringSnapshot = null;
      });
      return this.pending;
    }

    async readSnapshot() {
      try {
        if (!this.apiBase) throw new Error('请通过 CF-Server-Monitor 站点打开主题。');
        const options = {headers:this.requestHeaders(), cache:'no-store', signal:AbortSignal.timeout(15000)};
        const [config, response] = await Promise.all([
          this.siteConfig || fetch(this.apiBase + '/api/config', options).then(async res => {
            if (res.status === 403 && options.headers['X-Turnstile-Verified'])
              res = await fetch(this.apiBase + '/api/config', {cache:'no-store', signal:options.signal});
            return res.ok ? res.json() : null;
          }).catch(() => null),
          fetch(this.apiBase + '/api/servers', options)
        ]);
        if (config) {
          this.siteConfig = config;
          const sign = document.querySelector('.site-sign strong');
          if (sign && config.site_title) sign.textContent = config.site_title;
        }
        if ([401,403].includes(response.status)) {
          this.disconnect();
          this.isLive = false;
          this.rawServers = [];
          this.currentNodes = [];
          this.currentStats = {realtime:'—', realtimeUnit:'', realtimeDetail:'', total:'—', online:'—', offline:'—'};
          global.updateStats?.(this.currentStats);
          this.connection = 'auth';
          this.lastError = new Error('监控接口要求登录或访问验证。');
          this.notify();
          return;
        }
        if (!response.ok) throw new Error(global.farmText?.('节点接口返回 HTTP {code}。',{code:response.status}) || 'HTTP ' + response.status);
        const payload = await response.json();
        if (!Array.isArray(payload.servers)) throw new Error('节点接口返回了无法识别的数据。');
        const previous = new Map(this.rawServers.map(s => [s.id,s.rateSamples]));
        this.rawServers = payload.servers;
        this.siteConfig = {...this.siteConfig, ...payload.sysConfig};
        for (const server of this.rawServers) {
          server.rateSamples = previous.get(server.id);
          // Some Worker versions return a report time but no explicit status.
          // Resolve it once per inventory snapshot, independently of other nodes' messages.
          if (server.is_online == null) {
            const stamp = timestamp(server.report_timestamp ?? server.last_updated ?? server.timestamp);
            server.is_online = stamp !== null && Date.now() - stamp < 300000;
          }
        }
        for (const update of payload.latestReportUpdates || []) {
          const server = this.rawServers.find(s => s.id === update.serverId);
          if (server) rememberRates(server, update.samples);
        }
        const replay = this.applyUpdates(this.duringSnapshot);
        this.currentNodes = this.rawServers.map(s => this.normalizeServer(s));
        if (payload.stats && !replay.updated) this.updateStatsFromPayload(payload.stats);
        else this.updateStatsFromNodes();
        this.isLive = true;
        this.lastError = null;
        if (!this.paused) this.connection = 'ready';
        if (!document.hidden && !this.paused) this.connectWebSocket();
        this.notify();
      } catch (error) {
        this.lastError = error;
        if (!this.paused) this.connection = this.isLive ? 'stale' : 'retry';
        this.retryLater();
        this.notify();
      }
    }

    applyUpdates(updates) {
      let updated = false, unknown = false;
      for (const update of updates || []) {
        const target = this.rawServers.find(s => s.id === update.serverId);
        if (!target) { unknown = true; continue; }
        if (!Array.isArray(update.samples)) continue;
        rememberRates(target,update.samples);
        for (const sample of update.samples) {
          const metrics = sample.data || sample.payload || sample.metrics || {};
          const ts = timestamp(sample.ts ?? sample.timestamp ?? metrics.report_timestamp ?? metrics.last_updated ?? metrics.timestamp);
          if (ts && ts < (timestamp(target.report_timestamp ?? target.last_updated) || 0)) continue;
          Object.assign(target, metrics);
          if (ts) {
            target.report_timestamp = target.last_updated = ts;
            if (Date.now()-ts < 300000) target.is_online = true;
          }
          updated = true;
        }
      }
      return {updated, unknown};
    }

    connectWebSocket() {
      const ids = this.rawServers.map(s => s.id);
      const subscription = JSON.stringify({type:'subscribe',scope:'all',ids});
      if (this.ws) {
        if (this.ws.readyState === WebSocket.OPEN && this.subscription !== subscription) {
          this.ws.send(subscription);
          this.subscription = subscription;
        }
        return;
      }
      if (!ids.length) return;
      const url = new URL(this.apiBase);
      url.protocol = url.protocol === 'https:' ? 'wss:' : 'ws:';
      url.pathname = '/api/ws';
      url.searchParams.set('subscribe', 'all');
      const token = localStorage.getItem(STORAGE_KEYS.JWT);
      if (token && url.host !== location.host) url.searchParams.set('token', token);
      const ws = new WebSocket(url);
      this.ws = ws;
      ws.onopen = () => {
        if (ws !== this.ws) return;
        this.subscription = JSON.stringify({type:'subscribe',scope:'all',ids:this.rawServers.map(s => s.id)});
        ws.send(this.subscription);
        const minutes = Number(this.siteConfig?.frontend_ws_timeout_minutes);
        if (minutes > 0) this.wsTimeoutTimer = setTimeout(() => {
          this.paused = true;
          this.disconnect();
          this.connection = 'paused';
          this.notify();
        }, minutes * 60000);
      };
      ws.onmessage = event => {
        if (ws !== this.ws) return;
        let message;
        try { message = JSON.parse(event.data); } catch { return; }
        if (message.type !== 'batchUpdate' || !Array.isArray(message.updates)) return;
        this.duringSnapshot?.push(...message.updates);
        if (!this.applyUpdates(message.updates).updated) return;
        this.retryCount = 0;
        this.retryDelay = 2000;
        if (this.renderTimer) return;
        this.renderTimer = setTimeout(() => {
          this.renderTimer = null;
          this.currentNodes = this.rawServers.map(s => this.normalizeServer(s));
          this.updateStatsFromNodes();
          this.connection = 'ready';
          this.notify();
        }, 1000);
      };
      ws.onclose = () => {
        if (ws !== this.ws) return;
        clearTimeout(this.wsTimeoutTimer);
        this.ws = null;
        this.connection = 'stale';
        this.retryLater();
        this.notify();
      };
    }
  }

  // 单例导出
  const adapter = new CFServerMonitorAdapter();
  global.CFSMAdapter = CFServerMonitorAdapter;
  global.cfsmAdapter = adapter;
  if (location.hash.startsWith('#/server/')) return;

  // 延迟启动，避免阻塞页面核心骨架绘制
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => adapter.init());
  } else {
    adapter.init();
  }
})(typeof window !== 'undefined' ? window : global);
