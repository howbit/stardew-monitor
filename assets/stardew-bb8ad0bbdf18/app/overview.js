import { calculateFinanceSummary, DEFAULT_EXCHANGE_RATES, formatFinanceAmount, getDailyExchangeRates } from './vendor/cfsm/finance.js';

const adapter = window.cfsmAdapter;
const valueTile = document.querySelector('#remaining-value');
const trafficTile = document.querySelector('#calendar-traffic');
let rates = DEFAULT_EXCHANGE_RATES;
let rateSource = 'default';
let requestedDay = '';
const calendars = new Map();

function monthAt(stamp, zone) {
  if (!calendars.has(zone)) {
    try { calendars.set(zone,new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',timeZone:zone})); }
    catch { calendars.set(zone,new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',timeZone:'UTC'})); }
  }
  return calendars.get(zone).format(stamp);
}

function show(tile, value, unit, note, explanation) {
  for (const [selector, text] of [['strong',value],['.unit',unit],['.stat-note',note]]) {
    const element = tile.querySelector(selector);
    if (element.textContent !== text) element.textContent = text;
  }
  if (tile.title !== explanation) tile.title = explanation;
}

function bytes(value) {
  const units = ['B','KB','MB','GB','TB','PB','EB'];
  const i = value > 0 ? Math.min(units.length-1,Math.floor(Math.log2(Math.max(1,value))/10)) : 0;
  return [(value / 1024**i).toFixed(i ? 1 : 0),units[i]];
}

function updateTraffic(nodes, now) {
  let rx = 0, tx = 0, covered = 0;
  for (const node of nodes) {
    const sample = node.monthlyReport;
    if (!sample || node.resetDay !== 1) continue;
    const zone = node.monthlyTimeZone || node.location?.timeZone || 'UTC';
    if (monthAt(sample.stamp,zone) !== monthAt(now,zone)) continue;
    rx += sample.rx;
    tx += sample.tx;
    covered++;
  }
  const [value,unit] = bytes(rx+tx);
  const directions = '↑ '+bytes(tx).join(' ')+'　↓ '+bytes(rx).join(' ');
  const partial = covered < nodes.length;
  const coverage = '已计 '+covered+'/'+nodes.length+' 个节点';
  const note = partial ? (covered ? coverage : '暂无本月完整读数') : directions;
  show(trafficTile, covered || !nodes.length ? value : '—', covered || !nodes.length ? unit : '',note,
    '汇总每月 1 日重置的节点在本月最后一次上报的上下行字节，含离线节点。'+coverage+'。'+directions+
    (partial ? '。其他节点使用自定义账期，或缺少本月完整读数。' : '。'));
}

function updateValue(nodes, now) {
  const config = adapter.siteConfig || {};
  const hidden = [config.show_price,config.show_expire].some(v => [false,'false',0,'0'].includes(v));
  if (adapter.isLive && hidden) {
    show(valueTile,'—','','计费信息未公开','剩余价值需要公开价格和到期时间。');
    return;
  }
  const terms = nodes.map(n => n.finance).filter(t => t && Number.isFinite(Date.parse(t.expire_date)));
  const summary = calculateFinanceSummary(terms,rates,now);
  const free = nodes.some(n => n.finance && (/^(免费|-1|0(?:\.0+)?)$/.test(String(n.finance.price).trim()) ||
    String(n.finance.tags || '').split(',').some(tag => tag.trim() === '白嫖中')));
  if (nodes.length && !summary.configuredCount && !free) {
    show(valueTile,'—','','暂无计费数据','没有可计算剩余价值的价格、周期和到期日。');
    return;
  }
  const amount = formatFinanceAmount(summary.remainingValueCNY,'CNY');
  const estimate = adapter.isLive ? ({network:'按当日汇率估算',cache:'按当日汇率估算','stale-cache':'按缓存汇率估算',default:'按参考汇率估算'}[rateSource]) : '示例估值';
  show(valueTile,amount.symbol+amount.value,'',estimate,
    '按周期单价与剩余时长折算为人民币，已到期按零计。含计费数据的付费节点 '+summary.configuredCount+' 台。');
  const today = new Date(now).toLocaleDateString();
  if (adapter.isLive && summary.configuredCount && requestedDay !== today) {
    requestedDay = today;
    getDailyExchangeRates().then(result => {
      if (requestedDay !== today) return;
      rates = result.rates;
      rateSource = result.source;
      refresh();
    });
  }
}

function refresh() {
  if (adapter.liveOnly && !adapter.isLive) return;
  const now = Date.now();
  const nodes = adapter.getNodes();
  updateTraffic(nodes,now);
  updateValue(nodes,now);
}

adapter.subscribe(refresh);
refresh();
window.setInterval(refresh,60000);
document.addEventListener('visibilitychange',() => { if (!document.hidden) refresh(); });
