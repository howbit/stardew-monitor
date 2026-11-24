(() => {
  'use strict';
  const key = 'cfsm_stardew_language';
  const locales = ['zh-CN', 'en', 'ja'];
  let preference;
  try { preference = localStorage.getItem(key); } catch {}
  const requested = new URL(location.href).searchParams.get('lang') || preference;
  const language = locales.includes(requested) ? requested : 'zh-CN';
  document.documentElement.lang = language;

  // Keys are the original interface copy. Values inserted into a message are never translated.
  const messages = {
    '我的服务器':['My servers','サーバー一覧'], '全部':['All','すべて'], '亚洲':['Asia','アジア'], '美洲':['Americas','南北アメリカ'], '欧洲':['Europe','ヨーロッパ'],
    '实时流量':['Live traffic','現在の通信量'], '全部节点':['Total nodes','全ノード'], '在线':['Online','オンライン'], '离线':['Offline','オフライン'],
    '管理后台':['Admin dashboard','管理画面'], '界面语言':['Language','表示言語'], '示例数据':['Demo data','サンプルデータ'],
    '服务器统计':['Server statistics','サーバー統計'], '地区筛选':['Filter by region','地域で絞り込み'], '卡片视图':['Cards','カード表示'], '列表视图':['List','リスト表示'],
    '搜索节点':['Search nodes','ノードを検索'], '搜索节点…':['Search nodes…','ノードを検索…'], '节点视图、搜索与昼夜':['Node display and settings','ノード表示と設定'],
    '切换到白天':['Switch to day','昼に切り替え'], '切换到夜晚':['Switch to night','夜に切り替え'], '季节预览':['Season preview','季節のプレビュー'],
    '自动 (天时联动)':['Automatic','自動（現地に連動）'], '返回本地农场':['Local farm','地元の農場に戻る'], '切回访客本地农场场景':['Return to your local farm','現在地の農場に戻る'],
    '选择小屋':['Choose a building','建物を選ぶ'], '切换节点建筑':['Choose a node building','ノードの建物を選ぶ'], '自动分配':['Automatic','自動割り当て'], '关闭':['Close','閉じる'],
    '本地场景':['Local farm','現在地の農場'], '服务器':['Server','サーバー'], '（网络定位）':[' (IP location)','（IP推定）'],
    '春':['Spring','春'], '夏':['Summer','夏'], '秋':['Autumn','秋'], '冬':['Winter','冬'],
    '春季':['Spring','春'], '夏季':['Summer','夏'], '秋季':['Autumn','秋'], '冬季':['Winter','冬'],
    '春日':['Spring day','春の昼'], '夏日':['Summer day','夏の昼'], '秋日':['Autumn day','秋の昼'], '冬日':['Winter day','冬の昼'],
    '春夜':['Spring night','春の夜'], '夏夜':['Summer night','夏の夜'], '秋夜':['Autumn night','秋の夜'], '冬夜':['Winter night','冬の夜'],
    '晴':['Clear','晴れ'], '多云':['Cloudy','曇り'], '雾':['Fog','霧'], '雨':['Rain','雨'], '雷雨':['Storm','雷雨'], '雪':['Snow','雪'], '风':['Wind','風'],
    '缓存':['cached','キャッシュ'], '模拟':['simulated','ゲーム内'], '实况':['Live weather','現在の天気'], '最近天气':['Last weather report','直近の天気'],
    '季节天气':['Seasonal weather','季節の天気'], '游戏天气':['Game weather','ゲーム内の天気'], '点击使用设备定位':['Use device location','端末の位置情報を使用'],
    '季节场景的模拟气温':['In-game temperature','ゲーム内の気温'], '暂未取得当地气温':['Temperature unavailable','現地の気温は未取得'],
    '气温 · 天气数据来自 Open-Meteo':['temperature · Open-Meteo','気温 · Open-Meteo'], '设备所在地':['Device location','端末の現在地'], '设备定位':['Device location','端末の位置情報'],
    '网络所在地':['IP location','IP推定地点'], '网络估算':['IP estimate','IP推定'], '浏览器时区':['Browser time zone','ブラウザーのタイムゾーン'],
    '场景配乐':['Farm music','農場の音楽'], '配乐待播放':['Music paused','再生待機中'], '点击继续播放':['Tap to play','押して再生'], '正在载入':['Loading','読み込み中'],
    '加载失败，点击重试':['Could not load · retry','読み込み失敗・再試行'], '正在播放':['Now playing','再生中'], '播放配乐':['Play music','音楽を再生'],
    '继续播放':['Resume','再開'], '取消播放':['Cancel playback','再生をキャンセル'], '重试配乐':['Retry music','再試行'], '暂停配乐':['Pause music','一時停止'],
    '正在切换至{scene}':['Switching to {scene}','{scene}に切り替え中'], '场景':['Farm','農場'], '随季节与昼夜切换':['Seasonal soundtrack','季節と時間に合わせて再生'],
    '系统':['System','システム'], '内存':['Memory','メモリ'], '磁盘':['Disk','ディスク'], '负载':['Load','負荷'], '上行':['Upload','上り'], '下行':['Download','下り'],
    '上传':['Upload','送信'], '下载':['Download','受信'], '剩余流量':['Traffic left','残り通信量'], '本期出站':['Cycle sent','今期の送信'], '本期入站':['Cycle received','今期の受信'],
    '剩余':['Left','残り'], '暂无数据':['No data','データなし'], '实时':['Live','リアルタイム'], '空闲':['Idle','待機中'], '超时':['Timeout','タイムアウト'], '未知':['Unknown','不明'],
    '计费':['Price','料金'], '到期':['Expires','有効期限'], '免费':['Free','無料'], '月':['mo','月'], '季':['quarter','四半期'], '半年':['6 mo','半年'], '年':['yr','年'],
    '电信':['CT','中国電信'], '联通':['CU','中国聯通'], '移动':['CM','中国移動'], '延迟':['Latency','遅延'], '丢包':['Loss','損失'], '丢包率':['Packet loss','損失率'],
    '1 / 5 / 15 分钟平均负载':['1 / 5 / 15 min load averages','1 / 5 / 15 分の平均負荷'],
    '线路延迟未上报':['No latency readings','遅延データなし'], '线路未上报':['No probe readings','回線データなし'],
    '上下行合计':['Upload + download','送受信合計'], '仅上行':['Upload only','送信のみ'], '仅下行':['Download only','受信のみ'],
    '查看节点详情':['View node details','ノードの詳細を表示'], '查看系统版本':['View OS version','OS バージョンを表示'],
    '查看{city}的农场 · {id}':['Visit {city} farm · {id}','{city}の農場を表示 · {id}'], '点击查看 {id} 详细运行规格与历史趋势':['View specifications and history for {id}','{id} の仕様と履歴を表示'],
    '没找到包含“{q}”的节点。':['No nodes match “{q}”.','「{q}」に一致するノードはありません。'], '暂无监控节点。请在管理后台配置服务器探针。':['No nodes yet. Add a probe in the admin dashboard.','ノードがありません。管理画面でプローブを設定してください。'],
    '正在连接监控站点…':['Connecting…','接続中…'], '暂时无法读取节点。':['Cannot load nodes. ','ノードを読み込めません。'], '监控接口要求登录或访问验证。':['Sign-in or verification required.','ログインまたはアクセス認証が必要です。'],
    '节点接口返回了无法识别的数据。':['Unrecognized node data.','ノードの応答形式が不明です。'], '节点接口返回 HTTP {code}。':['Node API returned HTTP {code}.','ノード API が HTTP {code} を返しました。'],
    '{n}秒':['{n}s','{n}秒'], '{n}分钟':['{n}m','{n}分'], '{n}小时':['{n}h','{n}時間'], '{n}天':['{n}d','{n}日'], '{age}前上报':['Reported {age} ago','{age}前に報告'],
    '{n} 核':['{n} cores','{n} コア'], '已到期':['Expired','期限切れ'], '今天到期':['Expires today','本日期限'], '{n}天后到期':['Expires in {n}d','あと{n}日'],
    '关闭详情视窗':['Close details','詳細を閉じる'], '运行时长':['Uptime','稼働時間'], '未上报':['Not reported','未報告'], '读':['Read','読み取り'], '写':['Write','書き込み'],
    '极昼':['Polar day','白夜'], '极夜':['Polar night','極夜'], '未配置':['Not configured','未設定'], '夜间':['Night','夜'], '白天':['Day','昼'],
    '机房天时与地理信息':['Local time and location','現地時刻と所在地'], '所在地区':['Location','所在地'], '当地时间':['Local time','現地時刻'], '地理坐标':['Coordinates','座標'],
    '日出 / 日落':['Sunrise / sunset','日の出 / 日の入り'], '传送至节点农场':['Visit node farm','ノードの農場に移動'], '地区未配置':['Location not set','地域未設定'], '时区未配置':['Time zone not set','タイムゾーン未設定'],
    '硬件配置与系统规格':['Hardware and system','ハードウェアとシステム'], 'CPU 型号':['CPU model','CPU 型番'], '核心架构':['Cores and architecture','コア数と構成'],
    '操作系统':['Operating system','OS'], '内核版本':['Kernel version','カーネル'], '连接统计':['Connections','接続数'], '负载（1 / 5 / 15 分钟）':['Load (1 / 5 / 15 min)','負荷（1 / 5 / 15 分）'],
    '系统进程':['Processes','プロセス'], '个进程':['processes','プロセス'], '内存与存储吞吐':['Memory and storage','メモリとストレージ'],
    '物理内存 (RAM)':['Physical memory (RAM)','物理メモリ (RAM)'], '虚拟内存 (SWAP)':['Swap','スワップ'], '主磁盘容量':['Primary disk','メインディスク容量'], '磁盘 IO 性能':['Disk I/O','ディスク I/O'],
    '实时网络与月度流量':['Network and billing-cycle traffic','ネットワークと月間通信量'], '当前速率':['Current speed','現在の速度'], '月度累计':['Cycle usage','今期の使用量'], '月度配额':['Traffic limit','通信量上限'],
    '节点编号':['Node ID','ノード ID'], '线路延迟与连通性':['Latency and connectivity','遅延と接続状況'], '24 小时资源趋势波动':['Resource history · 24h','リソース履歴・24時間'],
    'CPU 占用率 (24h)':['CPU usage (24h)','CPU 使用率（24時間）'], '内存 占用率 (24h)':['Memory usage (24h)','メモリ使用率（24時間）'], '当前':['Current','現在'],
    '上下取大':['Higher direction','送受信の大きい方'], '速率趋势':['Speed history','速度の推移'], '延迟趋势':['Latency history','遅延の推移'], '丢包率趋势':['Loss history','損失率の推移'],
    '{scene}农场，主宅、水井和两片祝尼魔农田位于画面中央，{crops}':['{scene} farm with a farmhouse, a well and two Junimo fields growing {crops}.','{scene}の農場。中央に母屋と井戸、2つのジュニモ畑があり、{crops}が育っています。'],
    '草莓、花椰菜、防风草和土豆':['strawberries, cauliflower, parsnips and potatoes','イチゴ、カリフラワー、パースニップ、ジャガイモ'],
    '蓝莓、甜瓜、番茄和玉米':['blueberries, melons, tomatoes and corn','ブルーベリー、メロン、トマト、トウモロコシ'],
    '南瓜、蔓越莓、茄子和葡萄':['pumpkins, cranberries, eggplants and grapes','カボチャ、クランベリー、ナス、ブドウ'],
    '霜瓜、冬季采集作物和冬季纤维':['powdermelons, winter forage and fiber','パウダーメロン、冬の採集作物、繊維'],
    '香港':['Hong Kong','香港'], '东京':['Tokyo','東京'], '洛杉矶':['Los Angeles','ロサンゼルス'], '圣何塞':['San Jose','サンノゼ'], '法兰克福':['Frankfurt','フランクフルト'], '特罗姆瑟':['Tromsø','トロムソ'], '伦敦':['London','ロンドン'], '悉尼':['Sydney','シドニー'], '新加坡':['Singapore','シンガポール']
  };
  function t(key, fields = {}) {
    const text = language === 'zh-CN' ? key : messages[key]?.[language === 'en' ? 0 : 1] ?? key;
    return String(text ?? '').replace(/\{(\w+)\}/g, (whole, name) => Object.hasOwn(fields,name) ? fields[name] : whole);
  }
  window.farmText = t;
  window.farmLocale = language;

  document.addEventListener('DOMContentLoaded', () => {
    const select = document.querySelector('#theme-language');
    if (!select) return;
    select.value = language;
    select.addEventListener('change', () => {
      const url = new URL(location.href);
      try { localStorage.setItem(key, select.value); url.searchParams.delete('lang'); }
      catch { url.searchParams.set('lang', select.value); }
      if (url.href === location.href) location.reload(); else location.replace(url);
    });
    for (const el of document.querySelectorAll('.node-list-title h1,#node-demo-note,.region-tab,#season-preview option,#return-local')) el.textContent = t(el.textContent);
    for (const el of document.querySelectorAll('.content-controls [aria-label],.content-controls [title],#search,.summary-strip,.scene-music')) {
      for (const attr of ['aria-label','title','placeholder']) {
        if (el.hasAttribute(attr)) el.setAttribute(attr,t(el.getAttribute(attr)));
      }
    }
  });
})();
