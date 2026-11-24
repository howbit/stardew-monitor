const fallbackNodes = [
  {id:'HK-1',online:true,days:66,ip:'IPV4/6',building:'log-3',cpu:0,ram:17.28,disk:12.18,use:28.86,load:['0.00','0.00','0.00'],net:['3.9 KB/s','4.9 KB/s'],trf:['287.5 GB','289.8 GB','2 TB'],ping:[['CT',35],['CU',32],['CM',23],['BGP',1]]},
  {id:'HK-2',online:true,days:199,ip:'IPV4',building:'stone-3',cpu:1,ram:16.41,disk:12.10,use:7.79,load:['0.00','0.00','0.00'],net:['3.8 KB/s','1.8 KB/s'],trf:['120.1 GB','113.7 GB','2.9 TB'],ping:[['CT',317],['CU',331],['CM',19],['BGP',1]]},
  {id:'RN-1',online:true,days:75,ip:'IPV4',building:'mill-3',cpu:0,ram:13.70,disk:4.92,use:3.82,load:['0.00','0.00','0.00'],net:['132 B/s','121 B/s'],trf:['56.4 GB','58.4 GB','2.9 TB'],ping:[['CT',174],['CU',190],['CM',268],['BGP',1]]},
  {id:'RN-2',online:true,days:53,ip:'IPV4',building:'rustic-3',cpu:0,ram:31.64,disk:17.11,use:.72,load:['0.00','0.00','0.00'],net:['447 B/s','1.8 KB/s'],trf:['7.2 GB','7.1 GB','2 TB'],ping:[['CT',159],['CU',173],['CM',224],['BGP',1]]},
  {id:'C-1',online:true,days:39,ip:'IPV4',building:'beach-3',cpu:1.01,ram:16.87,disk:9.98,use:8.20,load:['0.02','0.05','0.00'],net:['29 KB/s','24.6 KB/s'],trf:['90.3 GB','73.8 GB','2 TB'],ping:[['CT',171],['CU',180],['CM',285],['BGP',1]]},
  {id:'H4',online:false,days:null,ip:'',building:'plank-3',cpu:0,ram:0,disk:0,use:null,load:['0.00','0.00','0.00'],net:['0 B/s','0 B/s'],trf:['0 B','0 B','—'],ping:[['CT',null],['CU',null],['CM',null],['BGP',null]]},
];

const defaultChoices = [
  'beach-3', 'big-shed-3', 'deluxe-coop-3', 'elliott-3', 'farmhouse-3',
  'fish-shop-3', 'island-farmhouse-3', 'junimo-3', 'leah-3', 'log-3',
  'manor-house-3', 'mill-3', 'neighbor-3', 'plank-3', 'rustic-3',
  'shed-3', 'slime-hutch-3', 'stone-3', 'trailer-3', 'witch-hut-3',
  'wizard-tower-3'
];

const seasons = {
  spring:{label:'春季',left:'cherry_spring.png',right:'oak_spring.png'},
  summer:{label:'夏季',left:'cherry_summer.png',right:'oak_summer.png'},
  fall:{label:'秋季',left:'maple_fall.png',right:'pomegranate_fall.png'},
  winter:{label:'冬季',left:'cherry_winter.png',right:'oak_winter.png'},
};

const cards = document.querySelector('#cards');
const menuCard = cards?.classList.contains('node-menu');
const demoNote = document.querySelector('#node-demo-note');
const choices = (window.cfsmAdapter && typeof window.cfsmAdapter.getBuildings === 'function')
  ? window.cfsmAdapter.getBuildings()
  : defaultChoices;

let nodes = (window.cfsmAdapter && typeof window.cfsmAdapter.getNodes === 'function')
  ? window.cfsmAdapter.getNodes()
  : fallbackNodes;

let night = (window.cfsmAdapter && typeof window.cfsmAdapter.getSavedNight === 'function')
  ? window.cfsmAdapter.getSavedNight()
  : false;
if (typeof location !== 'undefined' && location.search) {
  const qNight = new URLSearchParams(location.search).get('night');
  if (qNight !== null) night = (qNight === 'true' || qNight === '1');
}

function nodeText(key, fields = {}) {
  return window.farmText ? window.farmText(key, fields) : String(key ?? '').replace(/\{(\w+)\}/g, (m,k) => fields[k] ?? m);
}

function buildingMarkup(node){
  if (window.estateStart) {
    const base = `<img class="building-base" alt="" src="${window.nodeFarmSprite(node.building)}">`;
    return base + (node.online ? `<img class="window-light" alt="" src="${window.nodeFarmSprite(node.building,true)}">` : '');
  }
  if(!night) return `<img class="building-base" alt="" src="/assets/stardew-073aca87fed1/buildings3/${node.building}.png">`;
  const base = `<img class="building-base" alt="" src="/assets/stardew-073aca87fed1/lights3/${node.building}-night.png">`;
  const lights = node.online ? `<img class="building-lights" alt="" src="/assets/stardew-073aca87fed1/lights3/${node.building}-light.png">` : '';
  return base + lights;
}

function usageRow(label,value,tone){
  const display = value === null ? '∞' : `${value.toFixed(2)}%`;
  const width = value === null ? 100 : Math.min(100, Math.max(0, value));
  return `<div class="usage-row ${tone}"><span>${label}</span><span class="usage-track" aria-hidden="true"><i style="width:${width}%"></i></span><strong>${display}</strong></div>`;
}

function pingClass(value){
  if(value === null || value >= 250) return 'critical';
  if(value >= 150) return 'warning';
  if(value >= 100) return 'watch';
  return 'good';
}

function getNodeOSInfo(node) {
  if ('os' in node) return {name:node.os || '—', arch:node.arch || '—'};
  const city = (node.city || '').toLowerCase();
  if (city.includes('洛杉矶') || city.includes('东京')) return { name: 'Ubuntu 22.04', arch: 'amd64' };
  if (city.includes('特罗姆瑟')) return { name: 'N/A', arch: 'N/A' };
  return { name: 'Debian 12', arch: 'amd64' };
}

const regionLabels = {asia:'亚洲', americas:'美洲', europe:'欧洲', africa:'非洲', oceania:'大洋洲', antarctica:'南极洲', unknown:'未分区'};
// CLDR territory containment (UN M.49); show Antarctica separately in this UI.
const regionCodes = {
  asia: new Set('AE AF AM AZ BD BH BN BT CN CY GE HK ID IL IN IQ IR JO JP KG KH KP KR KW KZ LA LB LK MM MN MO MV MY NP OM PH PK PS QA SA SG SY TH TJ TL TM TR TW UZ VN YE'.split(' ')),
  americas: new Set('AG AI AR AW BB BL BM BO BQ BR BS BV BZ CA CL CO CR CU CW DM DO EC FK GD GF GL GP GS GT GY HN HT JM KN KY LC MF MQ MS MX NI PA PE PM PR PY SR SV SX TC TT US UY VC VE VG VI'.split(' ')),
  europe: new Set('AD AL AT AX BA BE BG BY CH CZ DE DK EE ES FI FO FR GB GG GI GR HR HU IE IM IS IT JE LI LT LU LV MC MD ME MK MT NL NO PL PT RO RS RU SE SI SJ SK SM UA VA XK'.split(' ')),
  africa: new Set('AO BF BI BJ BW CD CF CG CI CM CV DJ DZ EA EG EH ER ET GA GH GM GN GQ GW IC IO KE KM LR LS LY MA MG ML MR MU MW MZ NA NE NG RE RW SC SD SH SL SN SO SS ST SZ TD TF TG TN TZ UG YT ZA ZM ZW'.split(' ')),
  oceania: new Set('AS AU CC CK CX FJ FM GU HM KI MH MP NC NF NR NU NZ PF PG PN PW SB TK TO TV UM VU WF WS'.split(' ')),
  antarctica: new Set(['AQ'])
};
function getNodeRegion(node) {
  const code = node.location?.regionCode;
  const byCountry = code && Object.keys(regionCodes).find(region => regionCodes[region].has(code));
  if (byCountry) return byCountry;
  const city = (node.city || '').toLowerCase();
  const tz = (node.location?.timeZone || '').toLowerCase();
  if (tz.startsWith('asia/') || /香港|东京|新加坡/.test(city)) return 'asia';
  if (tz.startsWith('america/') || /洛杉矶|圣何塞/.test(city)) return 'americas';
  if (tz.startsWith('europe/') || /法兰克福|特罗姆瑟|柏林|伦敦/.test(city)) return 'europe';
  if (tz.startsWith('africa/')) return 'africa';
  if (tz.startsWith('australia/') || tz === 'pacific/auckland') return 'oceania';
  if (tz.startsWith('antarctica/')) return 'antarctica';
  return 'unknown';
}

function getNodeSubtitleParts(node) {
  const city = node.city || '未知';
  const region = regionLabels[getNodeRegion(node)];
  const place = [nodeText(region), nodeText(city)].filter(value => value && value !== '—' && value !== 'N/A').join(' · ');
  return [place, getNodeOSInfo(node).name].filter(value => value && value !== '—' && value !== 'N/A');
}

function escapeText(value) {
  return String(value ?? '—').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function elapsedText(ms) {
  const seconds = Math.max(0, Math.floor(ms / 1000));
  if (seconds < 60) return nodeText('{n}秒', {n:seconds});
  if (seconds < 3600) return nodeText('{n}分钟', {n:Math.floor(seconds/60)});
  if (seconds < 86400) return nodeText('{n}小时', {n:Math.floor(seconds/3600)});
  return nodeText('{n}天', {n:Math.floor(seconds/86400)});
}

function uptimeText(node) {
  if (node.bootTime) {
    const end = node.online ? Date.now() : node.lastUpdated;
    return end >= node.bootTime ? elapsedText(end - node.bootTime) : '—';
  }
  return node.days == null ? '—' : nodeText('{n}天', {n:node.days});
}

function reportText(stamp) {
  return stamp ? nodeText('{age}前上报',{age:elapsedText(Date.now()-stamp)}) : '';
}

const chosenRoutes = new Map();
function trendChart(points, label) {
  const measured = points.filter(([,v]) => Number.isFinite(v));
  if (measured.length < 2 || points.at(-1)[0] === points[0][0]) return '';
  const first = points[0][0], span = points.at(-1)[0] - first;
  const max = Math.max(1,...measured.map(([,v]) => v));
  let move = true, path = '';
  for (const [ts,v] of points) {
    if (v === null) { move = true; continue; }
    path += (move ? 'M' : 'L') + ((ts-first)/span*96).toFixed(1) + ' ' + (19-v/max*17).toFixed(1) + ' ';
    move = false;
  }
  return '<svg class="route-history" viewBox="0 0 96 21" role="img" aria-label="'+escapeText(label)+'"><path d="'+path+'" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>';
}

const systemLogos = [
  [/almalinux|\balma\b/i,'os-alma.svg'], [/ubuntu|elementary/i,'os-ubuntu.svg'],
  [/debian/i,'os-debian.svg'], [/cent\s?os/i,'os-centos.svg'], [/rocky/i,'os-rocky.svg'],
  [/alpine/i,'os-alpine.webp'], [/armbian/i,'os-armbian.svg'], [/arch\s?linux|\barch\b/i,'os-arch.svg'],
  [/fedora/i,'os-fedora.svg'], [/red\s?hat|\brhel\b/i,'os-redhat.svg'], [/suse/i,'os-openSUSE.svg'],
  [/linux mint/i,'os-mint.svg'], [/gentoo/i,'os-gentoo.svg'], [/manjaro/i,'os-manjaro-.svg'],
  [/nixos/i,'os-nix.svg'], [/kali/i,'os-kail.svg'], [/windows|win32|win64/i,'os-windows.svg'],
  [/mac\s?os|darwin/i,'os-macos.svg'], [/freebsd/i,'os-freebsd.svg'], [/openwrt|immortalwrt/i,'os-openwrt.svg'],
  [/istore/i,'os-istore.png'], [/synology|\bdsm\b/i,'os-synology.ico'], [/proxmox|\bpve\b/i,'os-proxmox.ico'],
  [/opencloud/i,'os-OpenCloudOS.png'], [/astra/i,'os-astar.png'], [/fnos/i,'os-fnos.ico'],
  [/euleros|huawei/i,'os-huawei.svg'], [/orange\s?pi/i,'os-orange-pi.svg'], [/qnap|\bqts\b/i,'os-qnap.svg'], [/unraid/i,'os-unraid.svg']
];

function systemBadge(node, detailUrl) {
  const os = node.os?.trim();
  if (!os || os === '—' || os === 'N/A') return '';
  const file = systemLogos.find(([match]) => match.test(os))?.[1];
  const src = file ? '/os-icons/'+file : '/assets/stardew-073aca87fed1/ui/lucide/hard-drive.svg';
  return '<a class="system-badge" href="'+detailUrl+'" title="'+escapeText(os)+'" aria-label="'+nodeText('查看系统版本')+' '+escapeText(os)+'">'+
    '<img src="'+src+'" width="18" height="18" alt=""></a>';
}

function metricIcon(name) {
  return '<i class="metric-icon" aria-hidden="true" style="--glyph:url(/assets/stardew-073aca87fed1/ui/lucide/'+name+'.svg)"></i>';
}

function percentTrack(used, label) {
  const width = Number.isFinite(used) ? Math.min(100,Math.max(0,used)) : 0;
  return '<div class="reading-track" title="'+escapeText(label)+'" aria-hidden="true"><i style="width:'+width+'%"></i></div>';
}

function renderResources(node) {
  const load = node.load;
  const readings = [
    ['CPU','cpu',node.cpu,2,node.cores ? nodeText('{n} 核',{n:node.cores}) : '—'],
    ['内存','memory-stick',node.ram,2,node.ramCapacity],
    ['磁盘','hard-drive',node.disk,1,node.diskCapacity],
    ['负载','gauge',load ? Number(load[0]) : null,2,load?.join(' / ')]
  ];
  return '<div class="resource-grid">'+readings.map(([label,icon,value,digits,detail]) => {
    const amount = node.online && Number.isFinite(value) ? value.toFixed(digits) : '—';
    const unit = amount !== '—' && icon !== 'gauge' ? '<small>%</small>' : '';
    const utilization = icon !== 'gauge' ? value : node.cores && value != null ? value/node.cores*100 : null;
    const caption = nodeText(icon === 'gauge' ? '1 / 5 / 15 分钟平均负载' : label);
    return '<div class="resource-reading '+icon+'"><div class="reading-heading"><span>'+metricIcon(icon)+nodeText(label)+'</span><strong>'+amount+unit+'</strong></div>'+
      '<div class="reading-detail" title="'+caption+'">'+escapeText(node.online ? detail || '—' : '—')+'</div>'+
      percentTrack(node.online ? utilization : null,caption)+'</div>';
  }).join('')+'</div>';
}

function renderTransfer(node, up, down) {
  const samples = node.rateSamples || [];
  const rates = [['上行','arrow-up',up,'本期出站',node.trf?.[1]],['下行','arrow-down',down,'本期入站',node.trf?.[0]]];
  const columns = rates.map(([label,icon,rate,totalLabel,total], i) => {
    const [number,unit] = rate.split(' ');
    const spark = node.online ? trendChart(samples.map(([ts,pair]) => [ts,pair[i]]),nodeText(label)+' '+nodeText('速率趋势')) : '';
    const state = !node.online ? '离线' : number === '—' ? '暂无数据' : parseFloat(number) === 0 ? '空闲' : '实时';
    return '<div class="transfer-direction '+icon+'"><div class="reading-heading"><span>'+metricIcon(icon)+nodeText(label)+'</span><strong>'+number+'<small>'+ (unit || '')+'</small></strong></div>'+
      '<div class="rate-trend">'+(spark || '<i aria-hidden="true"></i>')+'<small>'+nodeText(state)+'</small></div>'+
      '<div class="cycle-total"><span>'+metricIcon('globe')+nodeText(totalLabel)+'</span><b>'+escapeText(total)+'</b></div></div>';
  }).join('');
  const limit = node.unlimited ? '∞' : node.trf?.[2];
  let quota = '';
  if (node.trafficMode && (node.periodUsed !== '—' || (limit && limit !== '—'))) {
    const usage = escapeText(node.periodUsed)+(limit && limit !== '—' ? ' / '+escapeText(limit) : '');
    quota = '<div class="quota-reading"><div class="reading-heading"><span>'+metricIcon('database')+nodeText('剩余流量')+' <b>'+escapeText(node.remaining)+'</b></span>'+
      '<strong title="'+escapeText(nodeText(node.trafficMode))+'">'+usage+'</strong></div>'+percentTrack(node.use,nodeText(node.trafficMode))+'</div>';
  }
  return '<div class="transfer-grid">'+columns+'</div>'+quota;
}

function sampleStrip(points, stamp, value, loss, hours) {
  const bins = Array(20);
  const windowMs = hours * 3600000;
  const end = Date.now();
  function put(ts, reading) {
    const age = end-ts;
    if (!ts || age < 0 || age > windowMs) return;
    const slot = Math.min(19,Math.floor((1-age/windowMs)*20));
    bins[slot] = reading;
  }
  for (const [ts,reading] of points || []) put(ts,reading);
  if (stamp && value !== undefined && !(loss && value === null)) put(stamp,value);
  return '<div class="sample-strip" aria-hidden="true">'+Array.from(bins, v => {
    const tone = v === undefined ? '' : v === null ? (loss ? '' : 'bad') : loss
      ? (v >= 10 ? 'bad' : v > 1 ? 'warn' : 'good') : (v >= 220 ? 'bad' : v >= 100 ? 'warn' : 'good');
    return '<i class="'+tone+'"></i>';
  }).join('')+'</div>';
}

function renderProbeRows(node, charts, selected) {
  const names = {CT:'电信',CU:'联通',CM:'移动'};
  const hours = Number(window.cfsmAdapter?.siteConfig?.latency_window?.hours) || 2;
  return (node.ping || []).map(([label,latency], index) => {
    const data = node.routeData?.[label] || {};
    const delay = node.online ? latency === null ? nodeText('超时') : latency+' ms' : '—';
    const loss = node.online && Number.isFinite(data.loss) ? data.loss.toFixed(1)+'%' : '—';
    const name = escapeText(names[label] ? nodeText(names[label]) : label);
    const stamp = node.online ? node.lastUpdated : null;
    const html = '<span class="probe-latency"><span class="probe-value"><b>'+name+'</b><strong class="'+(node.online ? pingClass(latency) : '')+'">'+delay+'</strong></span>'+
      sampleStrip(data.points,stamp,latency,false,hours)+'</span><span class="probe-loss"><span class="probe-value"><strong class="'+(node.online && Number.isFinite(data.loss) ? data.loss >= 10 ? 'critical' : data.loss > 1 ? 'warning' : 'good' : '')+'">'+loss+'</strong></span>'+
      sampleStrip(data.lossPoints,stamp,data.loss,true,hours)+'</span>';
    const a11y=' aria-label="'+name+' · '+nodeText('延迟')+' '+delay+' · '+nodeText('丢包率')+' '+loss+'"';
    return charts.has(label) ? '<button type="button" class="probe-row route-pill" data-route-index="'+index+'" aria-pressed="'+(selected===label)+'"'+a11y+'>'+html+'</button>'
      : '<div class="probe-row" role="group"'+a11y+'>'+html+'</div>';
  }).join('');
}

function renderSegmentedMeter(label, percent, type, isOnline, capacity = '') {
  const total = 10;
  const active = (isOnline && percent !== null)
    ? Math.min(total, Math.max(0, Math.round((Number(percent) / 100) * total)))
    : 0;
  let segs = '';
  for (let i = 0; i < total; i++) {
    segs += `<span class="seg ${i < active ? 'active' : ''}"></span>`;
  }
  const decimals = type === 'disk' ? 1 : 2;
  const displayVal = (isOnline && Number.isFinite(percent)) ? `${percent.toFixed(decimals)}%` : '—';
  return `
    <div class="meter-row ${type}">
      <span class="meter-label">${label}</span>
      <div class="segmented-track" aria-hidden="true">${segs}</div>
      <strong class="meter-value">${displayVal}</strong>
      ${capacity && isOnline ? '<small class="meter-capacity">'+escapeText(capacity)+'</small>' : ''}
    </div>
  `;
}


let currentRegion = 'all';
const regionBar = document.querySelector('.region-tabs');
function syncRegionFilters() {
  if (!regionBar) return;
  const available = new Set((nodes || []).map(getNodeRegion));
  if (currentRegion !== 'all' && !available.has(currentRegion)) currentRegion = 'all';
  const keys = ['all', ...Object.keys(regionLabels).filter(key => available.has(key))];
  const signature = keys.join(',');
  if (regionBar.dataset.regions !== signature) {
    const focused = regionBar.contains(document.activeElement) && document.activeElement.dataset.region;
    const buttons = keys.map(key => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'region-tab';
      button.dataset.region = key;
      button.textContent = nodeText(key === 'all' ? '全部' : regionLabels[key]);
      return button;
    });
    regionBar.replaceChildren(...buttons);
    regionBar.dataset.regions = signature;
    if (focused) (buttons.find(b => b.dataset.region === focused) || buttons[0]).focus({preventScroll:true});
  }
  for (const button of regionBar.children) {
    const selected = button.dataset.region === currentRegion;
    if (button.getAttribute('aria-pressed') === String(selected)) continue;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  }
}
let currentView = 'grid';
try {
  const requested = new URLSearchParams(location.search).get('view');
  const savedV = ['grid','list'].includes(requested) ? requested : localStorage.getItem('cfsm_stardew_view');
  if (savedV === 'list') currentView = 'list';
} catch {}

function expiryInfo(date, today = new Date()) {
  const parts = /^(\d{4})-(\d{2})-(\d{2})(?:$|[T ])/.exec(date || '');
  if (!parts) return null;
  const [year, month, day] = parts.slice(1).map(Number);
  const end = new Date(Date.UTC(year, month - 1, day));
  if (end.getUTCFullYear() !== year || end.getUTCMonth() !== month - 1 || end.getUTCDate() !== day) return null;
  const start = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  const days = (end.getTime() - start) / 86400000;
  const key = days > 0 ? '剩余 {n} 天' : days < 0 ? '已过期 {n} 天' : '今天到期';
  return {days, text:nodeText(key,{n:Math.abs(days)})};
}

function billingMarkup(node) {
  const expiry = expiryInfo(node.expireDate);
  const price = node.price && node.price !== '—' ? `<span class="summary-price">${nodeText('计费')} <b>${escapeText(node.price)}</b></span>` : '';
  const tone = expiry && (expiry.days < 0 ? 'expired' : expiry.days <= 7 ? 'soon' : '');
  return price + (expiry ? `<span class="summary-expiry ${tone}"><b>${escapeText(expiry.text)}</b></span>` : '');
}

const flagNames = new Intl.DisplayNames([window.farmLocale || 'zh-CN'], {type:'region',fallback:'none'});
function regionFlag(node) {
  const code = node.location?.regionCode;
  if (!/^[A-Z]{2}$/.test(code || '') || !flagNames.of(code)) return '';
  const name = flagNames.of(code);
  const title = [name, nodeText(node.city)].filter((value,index,all) => value && all.indexOf(value) === index).join(' · ');
  const base = window.cfsmAdapter?.isLive || !node.demo ? '/flags/' : '/assets/stardew-073aca87fed1/ui/demo-flags/';
  return `<span class="region-flag summary-country" title="${escapeText(title)}"><img alt="${escapeText(name)}" src="${base}${code.toLowerCase()}.svg"></span>`;
}

function renderNodeSummary(node, detailUrl) {
  const status = nodeText(node.online ? '在线' : '离线');
  const metrics = [['CPU',node.cpu],['内存',node.ram],['磁盘',node.disk]].map(([label,percent]) => {
    const value = node.online && Number.isFinite(percent) ? percent : null;
    const level = value === null ? 'unknown' : value >= 90 ? 'high' : value >= 75 ? 'warn' : value >= 50 ? 'medium' : 'low';
    return `<div class="summary-metric ${level}"><dt>${nodeText(label)}</dt><dd>${value === null ? '—' : Number(value.toFixed(1))+'%'}
      <span class="summary-track" aria-hidden="true"><i style="width:${Math.min(100,Math.max(0,value ?? 0))}%"></i></span></dd></div>`;
  }).join('');
  const [down,up] = node.net || [];
  const speed = (label,rate) => `<div class="summary-metric"><dt>${nodeText(label)}</dt><dd>${escapeText(node.online ? rate : '—')}</dd></div>`;
  const billing = billingMarkup(node);
  const tags = [];
  function tag(kind, value) {
    if (value && value !== '—') tags.push(`<span class="summary-tag ${kind}">${escapeText(value)}</span>`);
  }
  if (node.ip === 'IPV4/6' || node.ip === 'IPV4') tag('ipv4','IPv4');
  if (node.ip === 'IPV4/6' || node.ip === 'IPV6') tag('ipv6','IPv6');
  for (const [index, label, kind] of [[1,'↑','sent'],[0,'↓','received']]) {
    const total = node.trf?.[index];
    if (total && total !== '—') tag(kind,label+' '+total);
  }
  for (const label of node.tags || []) tag('custom',label);
  if (node.trafficMode && node.remaining && node.remaining !== '—') tag('remaining',nodeText('剩余')+' '+node.remaining);
  const flag = regionFlag(node);
  const os = getNodeOSInfo(node).name;
  return `<header class="summary-head"><h3><span class="summary-status" role="img" aria-label="${status}" title="${status}"></span>
    ${flag}<a class="name" href="${detailUrl}">${escapeText(node.id)}</a></h3>
    ${billing ? '<p class="node-billing">'+billing+'</p>' : ''}</header>
    <dl class="summary-metrics"><div class="summary-metric"><dt>${nodeText('系统')}</dt><dd class="summary-os" title="${escapeText(os)}">${systemBadge(node,detailUrl)}<span>${escapeText(os)}</span></dd></div>
    ${metrics}${speed('上传',up)}${speed('下载',down)}</dl>
    ${tags.length ? '<div class="summary-tags">'+tags.join('')+'</div>' : ''}`;
}

function setNodeActions(card, node, warpHost) {
  card.dataset.id = node.id;
  card.dataset.key = node.rawId ?? node.id;
  card.setAttribute('aria-label',node.id);
  if (window.estateStart && warpHost) {
    const warp = document.createElement('button');
    warp.type = 'button';
    warp.className = 'farm-warp';
    warp.dataset.node = node.id;
    warp.title = warp.ariaLabel = nodeText('查看{city}的农场 · {id}',{city:nodeText(node.city) || node.id,id:node.id});
    const selected = window.estateSelectedNode?.() === node.id;
    warp.setAttribute('aria-pressed', String(selected));
    card.classList.toggle('scene-active', selected);
    if (warpHost.classList.contains('node-status-badge')) warpHost.querySelector('span').after(warp);
    else warpHost.append(warp);
  }
}

cards.addEventListener('click', event => {
  const card = event.target.closest('article[data-key]');
  if (!card) return;
  const node = nodes.find(item => String(item.rawId ?? item.id) === card.dataset.key);
  if (!node) return;
  const button = event.target.closest('button');
  if (button?.classList.contains('farm-warp')) {
    window.selectServerScene(node.id);
    document.querySelector('.farm-hero').scrollIntoView({block:'start'});
  } else if (button?.classList.contains('building-picker')) {
    if (menuCard && window.openHousePicker) return window.openHousePicker(node, choices, button);
    node.building = choices[(choices.indexOf(node.building) + 1) % choices.length];
    window.cfsmAdapter?.setBuildingOverride(node.rawId || node.id, node.building);
    render();
  } else if (button?.hasAttribute('data-route-index')) {
    const label = node.ping[Number(button.dataset.routeIndex)]?.[0];
    if (menuCard && chosenRoutes.get(node.id) === label) chosenRoutes.delete(node.id);
    else chosenRoutes.set(node.id, label);
    render();
  } else if (!event.target.closest('button,a')) {
    location.hash = '#/server/' + encodeURIComponent(node.rawId ?? node.id);
  }
});

// Keep the hovered article, focused controls and unchanged sprites in place on each report.
function syncCardElement(current, next) {
  if (current.isEqualNode(next)) return;
  if (current.nodeName !== next.nodeName || current.namespaceURI !== next.namespaceURI) {
    current.replaceWith(next);
    return;
  }
  if (current.nodeType !== 1) {
    current.nodeValue = next.nodeValue;
    return;
  }
  for (const name of current.getAttributeNames()) {
    if (!next.hasAttribute(name)) current.removeAttribute(name);
  }
  for (const name of next.getAttributeNames()) {
    const value = next.getAttribute(name);
    if (current.getAttribute(name) !== value) current.setAttribute(name,value);
  }
  const children = Array.from(next.childNodes);
  children.forEach((child,index) => {
    if (current.childNodes[index]) syncCardElement(current.childNodes[index],child);
    else current.append(child);
  });
  while (current.childNodes.length > children.length) current.lastChild.remove();
}

function render(){
  syncRegionFilters();
  const search = document.querySelector('#search');
  const q = search ? search.value.trim().toLowerCase() : '';
  const previous = new Map(Array.from(cards.children, el => [el.dataset.key, el]));
  function place(card, index) {
    const key = card.dataset.key;
    const existing = previous.get(key);
    previous.delete(key);
    if (existing) syncCardElement(existing,card);
    const item = existing || card;
    if (cards.children[index] !== item) cards.insertBefore(item,cards.children[index] || null);
  }
  const demoOverview = Boolean(demoNote && nodes?.length && nodes.every(node => node.demo));
  if (demoNote) demoNote.hidden = !demoOverview;

  if (cards) {
    cards.classList.toggle('grid-view',currentView === 'grid');
    cards.classList.toggle('list-view',currentView === 'list');
  }

  if(!nodes || nodes.length === 0){
    const empty = document.createElement('p');
    empty.className = 'empty-state';
    empty.setAttribute('role', 'status');
    empty.textContent = nodeText('暂无监控节点。请在管理后台配置服务器探针。');
    const adapter = window.cfsmAdapter;
    if (adapter?.liveOnly && !adapter.isLive) {
      empty.textContent = adapter.lastError
        ? nodeText('暂时无法读取节点。') + nodeText(adapter.lastError.message)
        : nodeText('正在连接监控站点…');
    }
    cards.replaceChildren(empty);
    return;
  }

  let shown = 0;
  for(const node of nodes){
    if(q && !node.id.toLowerCase().includes(q)) continue;
    if(currentRegion !== 'all') {
      const reg = getNodeRegion(node);
      if(reg !== currentRegion) continue;
    }
    shown += 1;
    const card = document.createElement('article');
    const detailUrl = '#/server/'+encodeURIComponent(node.rawId ?? node.id);
    if (menuCard && currentView === 'list') {
      card.className = 'server-summary '+(node.online ? 'online' : 'offline');
      card.innerHTML = renderNodeSummary(node, detailUrl);
      setNodeActions(card, node, card.querySelector('.summary-head'));
      place(card, shown - 1);
      continue;
    }
    card.className = `card monitor-card ${node.online ? 'online' : 'offline'} view-${currentView}`;
    const isOnline = node.online;
    card.classList.toggle('menu-card', menuCard);
    const subtitleParts = getNodeSubtitleParts(node);
    const subtitle = escapeText(subtitleParts.join(' · '));
    const flag = menuCard ? regionFlag(node) : '';
    const [down, up] = (node.net || []).map(v => escapeText(v));
    const upNet = isOnline && up ? up : '—', downNet = isOnline && down ? down : '—';
    const [rx,tx,limit] = node.trf || [];
    const quota = limit && limit !== '—'
      ? escapeText(node.periodUsed || '—') + ' / ' + escapeText(limit) + (Number.isFinite(node.use) ? ' · '+Math.round(node.use)+'%' : '')
      : '↓ '+escapeText(rx)+'　↑ '+escapeText(tx);
    const expiry = expiryInfo(node.expireDate);
    const expiryBadge = expiry ? '<span class="expiry-notice">'+escapeText(expiry.text)+'</span>' : '';
    const report = node.lastUpdated ? '<small class="report-age" data-report="'+Number(node.lastUpdated)+'">'+reportText(node.lastUpdated)+'</small>' : '';
    const status = '<div class="node-status-badge '+(isOnline ? 'online' : 'offline')+'"><span><i class="status-dot"></i> '+
      nodeText(isOnline ? '在线' : '离线')+'</span>'+(!menuCard && currentView === 'list' ? expiryBadge : '')+(menuCard ? '' : report)+'</div>';
    const details = menuCard ? '' : '<a class="details-link" href="'+detailUrl+'">详情 ↗</a>';
    const ipTag = node.ip ? '<span class="ip-tag">'+escapeText(node.ip)+'</span>' : '';
    const billing = menuCard ? billingMarkup(node) : '';
    const title = menuCard
      ? '<div class="node-identity"><div class="node-name-line">'+flag+'<h3><a class="name" href="'+detailUrl+'" title="'+nodeText('查看节点详情')+'"></a></h3></div>'+
        '<div class="node-sub">'+systemBadge(node,detailUrl)+ipTag+(flag ? '' : '<span>'+escapeText(nodeText(node.city || '地区未配置'))+'</span>')+report+'</div>'+
        (node.remark ? '<div class="node-remark">'+escapeText(node.remark)+'</div>' : '')+
        (billing ? '<div class="node-billing">'+billing+'</div>' : '')+'</div>'
      : '<div class="node-identity"><h3 class="name"></h3><div class="node-sub">'+subtitle+'</div><div class="node-tags-row">'+ipTag+expiryBadge+'</div></div>';
    const traffic = '<div class="card-traffic-row"><span class="traffic-col"><span class="traffic-lbl">↑ 上传</span><strong class="traffic-val">'+
      upNet+'</strong></span><span class="traffic-col"><span class="traffic-lbl">↓ 下载</span><strong class="traffic-val">'+downNet+
      '</strong></span></div><div class="period-traffic"><span>本期流量</span><strong>'+quota+'</strong></div>';
    const allRoutes = node.ping || [];
    const charts = new Map();
    for (const [label] of allRoutes) {
      const data = node.routeData?.[label];
      const latency = trendChart(data?.points || [],label+' '+nodeText('延迟趋势'));
      const loss = trendChart(data?.lossPoints || [],label+' '+nodeText('丢包率趋势'));
      if (latency || loss) charts.set(label,(latency ? '<span>'+nodeText('延迟')+' '+latency+'</span>' : '')+(loss ? '<span>'+nodeText('丢包')+' '+loss+'</span>' : ''));
    }
    const selected = chosenRoutes.get(node.id);
    const activeLabel = charts.has(selected) ? selected : menuCard ? undefined : charts.keys().next().value;
    const routePills = menuCard ? renderProbeRows(node,charts,activeLabel) : allRoutes.map(([label,v],i) => {
      const loss = node.routeData?.[label]?.loss;
      const content = '<small>'+escapeText(label)+'</small><strong>'+(isOnline ? (v === null ? '超时' : escapeText(v)+' ms') : '—')+'</strong>'+
        (menuCard && Number.isFinite(loss) && isOnline ? '<small>丢包 '+loss+'%</small>' : '');
      const style = 'route-pill '+(isOnline ? pingClass(v) : 'offline');
      return charts.has(label)
        ? '<button type="button" class="'+style+'" data-route-index="'+i+'" aria-pressed="'+(label===activeLabel)+'">'+content+'</button>'
        : '<span class="'+style+'">'+content+'</span>';
    }).join('');
    const history = activeLabel === undefined ? '' : '<div class="route-summary">'+escapeText(activeLabel)+' '+charts.get(activeLabel)+'</div>';
    const footer = history || details ? '<div class="card-footer-row">'+history+details+'</div>' : '';
    const routes = routePills ? '<div class="route-pings-bar">'+routePills+'</div>' : '<div class="route-no-data">'+nodeText('线路延迟未上报')+'</div>';

    if (currentView === 'list' && !menuCard) {
      const columns = [['CPU',node.cpu],['内存',node.ram],['磁盘',node.disk],['本期配额',node.use]].map(([k,v]) =>
        '<div class="list-col"><small>'+k+'</small><strong>'+(Number.isFinite(v) && (isOnline || k==='本期配额') ? Math.round(v)+'%' : '—')+'</strong></div>').join('');
      card.innerHTML = '<div class="col-host"><a class="name" href="'+detailUrl+'"></a></div>'+status+
        '<div class="list-col col-place"><small>地点 / 系统</small><span class="node-sub">'+subtitle+'</span></div>'+columns+
        '<div class="list-col"><small>TCP / UDP</small><span>'+(isOnline ? escapeText(node.tcp)+' / '+escapeText(node.udp) : '—')+'</span></div>'+
        '<div class="list-col"><small>↓ 下载</small><span>'+downNet+'</span></div><div class="list-col"><small>↑ 上传</small><span>'+upNet+'</span></div>';
    } else {
      const gauges = menuCard ? renderResources(node)
        : '<div class="usage monitor-usage">'+renderSegmentedMeter('CPU',node.cpu,'cpu',isOnline,menuCard && node.cores ? nodeText('{n} 核',{n:node.cores}) : '')+
          renderSegmentedMeter('内存',node.ram,'ram',isOnline,node.ramCapacity)+renderSegmentedMeter('磁盘',node.disk,'disk',isOnline,node.diskCapacity)+'</div>';
      const header = '<div class="node-head"><button class="building building-picker" type="button" aria-label="'+nodeText('切换节点建筑')+'" title="'+nodeText('选择小屋')+'">'+
        buildingMarkup(node)+'</button>'+title+status+'</div>';
      card.innerHTML = menuCard ? header+'<div class="card-readings">'+gauges+renderTransfer(node,upNet,downNet)+
        '<div class="node-probes">'+routes+history+'</div></div>' : header+gauges+traffic+routes+footer;
    }
    const warpHost = menuCard ? '.node-status-badge' : currentView === 'list' ? '.col-host' : '.card-footer-row';
    setNodeActions(card, node, card.querySelector(warpHost));
    const nameEl = card.querySelector('.name');
    if (nameEl) nameEl.textContent = node.id;

    const buildingBtn = card.querySelector('.building-picker');
    if (buildingBtn) {
      buildingBtn.dataset.nodeId = node.rawId || node.id;
    }

    place(card, shown - 1);
  }
  for (const stale of previous.values()) stale.remove();

  if(!shown){
    const empty = document.createElement('p');
    empty.className = 'empty-state';
    empty.setAttribute('role', 'status');
    empty.textContent = nodeText('没找到包含“{q}”的节点。',{q:search?.value.trim() || ''});
    cards.append(empty);
  }
}

function applySeason(season, { persist = true } = {}){
  if (season === 'auto') {
    if (persist && window.cfsmAdapter && typeof window.cfsmAdapter.saveSeason === 'function') {
      window.cfsmAdapter.saveSeason('auto');
    }
    return;
  }
  const next = seasons[season] || seasons.spring;
  const footer = document.querySelector('#seasonal-footer');
  if (footer) {
    footer.dataset.season = season;
    footer.setAttribute('aria-label', nodeText('{season}像素景观收尾',{season:nodeText(next.label)}));
  }
  document.body.dataset.season = season;
  if (persist && window.cfsmAdapter && typeof window.cfsmAdapter.saveSeason === 'function') {
    window.cfsmAdapter.saveSeason(season);
  }
}

window.applySeason = applySeason;
window.setNightMode = function(isNight) {
  const changed = night !== Boolean(isNight);
  night = Boolean(isNight);
  if (window.estateStart) {
    document.body.classList.toggle('night', night);
    viewModeBtn.setAttribute('aria-pressed', String(night));
    const action = nodeText(night ? '切换到白天' : '切换到夜晚');
    viewModeBtn.title = action;
    viewModeBtn.setAttribute('aria-label', action);
    if (changed) render();
    return;
  }
  document.body.classList.toggle('night', night);
  if (viewModeBtn) {
    viewModeBtn.setAttribute('aria-pressed', String(night));
    viewModeBtn.textContent = night ? '切换白天预览' : '切换夜间预览';
  }
  if (window.cfsmAdapter && typeof window.cfsmAdapter.saveNight === 'function') {
    window.cfsmAdapter.saveNight(night);
  }
  render();
};
window.renderNodes = render;
window.setNodeView = function(view) {
  currentView = view === 'list' ? 'list' : 'grid';
  if (typeof history !== 'undefined' && location.search) {
    const url = new URL(location.href);
    if (url.searchParams.has('view') && url.searchParams.get('view') !== currentView) {
      url.searchParams.set('view',currentView);
      history.replaceState(history.state,'',url);
    }
  }
  try { localStorage.setItem('cfsm_stardew_view', currentView); } catch {}
  for (const b of document.querySelectorAll('.view-opt')) {
    const isTarget = b.dataset.view === currentView;
    b.classList.toggle('active', isTarget);
    b.setAttribute('aria-pressed', String(isTarget));
  }
  render();
};

const searchInput = document.querySelector('#search');
if (searchInput) {
  searchInput.addEventListener('input', render);
  if (menuCard) searchInput.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    event.preventDefault();
    searchInput.value = '';
    render();
    document.querySelector('.view-opt[aria-pressed="true"]')?.focus();
  });
}

const viewModeBtn = document.querySelector('#view-mode');
if (viewModeBtn && !window.estateStart) {
  viewModeBtn.addEventListener('click', event => {
    night = !night;
    document.body.classList.toggle('night', night);
    event.currentTarget.setAttribute('aria-pressed', String(night));
    event.currentTarget.textContent = night ? '切换白天预览' : '切换夜间预览';
    if (window.cfsmAdapter && typeof window.cfsmAdapter.saveNight === 'function') {
      window.cfsmAdapter.saveNight(night);
    }
    render();
  });
}

const seasonSelectEl = document.querySelector('#season-preview');
if (seasonSelectEl && !window.estateStart) {
  seasonSelectEl.addEventListener('change', event => applySeason(event.currentTarget.value));
}

if (window.estateStart) {
  seasonSelectEl.value = window.estateStart.demo ? window.estateStart.season : 'auto';
  window.setNightMode(window.estateStart.night);
} else {
// 初始化季节与昼夜（优先从适配层/localStorage读取）
const savedSeason = (window.cfsmAdapter && typeof window.cfsmAdapter.getSavedSeason === 'function')
  ? window.cfsmAdapter.getSavedSeason()
  : null;
const urlSeason = new URLSearchParams(location.search).get('season');
const initialSeason = (seasons[urlSeason] || urlSeason === 'auto') ? urlSeason : (savedSeason || (seasonSelectEl ? seasonSelectEl.value : 'spring'));

if (seasonSelectEl) {
  seasonSelectEl.value = initialSeason;
}
applySeason(initialSeason);

if (night) {
  document.body.classList.add('night');
  if (viewModeBtn) {
    viewModeBtn.setAttribute('aria-pressed', 'true');
    viewModeBtn.textContent = '切换白天预览';
  }
} else {
  document.body.classList.remove('night');
  if (viewModeBtn) {
    viewModeBtn.setAttribute('aria-pressed', 'false');
    viewModeBtn.textContent = '切换夜间预览';
  }
}

}

// 订阅适配层实时更新
if (window.cfsmAdapter && typeof window.cfsmAdapter.subscribe === 'function') {
  window.cfsmAdapter.subscribe(({ nodes: newNodes, isLive }) => {
    nodes = newNodes;
    render();
    const demoNote = document.querySelector('.demo-note');
    if (demoNote) {
      if (isLive) {
        demoNote.textContent = '实时监控已连接。点击小屋图标可切换并记忆节点建筑。';
      } else {
        demoNote.textContent = '示例数据。点击小屋图标可切换节点图标；监控后端将在正式接入阶段替换示例值。';
      }
    }
  });
}

regionBar?.addEventListener('click', event => {
  const button = event.target.closest('button[data-region]');
  if (!button || button.dataset.region === currentRegion) return;
  currentRegion = button.dataset.region;
  render();
});

const viewBtns = document.querySelectorAll('.view-opt');
for (const btn of viewBtns) {
  btn.addEventListener('click', () => {
    window.setNodeView(btn.dataset.view || 'grid');
  });
}

// 恢复已保存的视图状态
window.setNodeView(currentView);
