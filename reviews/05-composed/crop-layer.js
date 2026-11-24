/* Original crop illustrations on an immutable scene coordinate plane. */
(function (root) {
  'use strict';
  const scene = { width: 2172, height: 724 };
  // Native alpha>=128 bounds are placement metadata; PNG pixels stay untouched.
  // Seasonal source: https://stardewvalleywiki.com/Crops
  const catalog = {
    parsnip: { name: '防风草', seasons: ['spring'], size: 1254, bounds: [130, 209, 1124, 1155], paintedWidth: 40 },
    potato: { name: '土豆', seasons: ['spring'], size: 1254, bounds: [85, 372, 1161, 1170], paintedWidth: 54 },
    cauliflower: { name: '花椰菜', seasons: ['spring'], size: 1254, bounds: [154, 307, 1104, 1178], paintedWidth: 56 },
    'green-bean': { name: '青豆', seasons: ['spring'], size: 1254, bounds: [327, 91, 912, 1184], paintedWidth: 40 },
    strawberry: { name: '草莓', seasons: ['spring'], size: 1254, bounds: [152, 302, 1078, 1154], paintedWidth: 52 },
    blueberry: { name: '蓝莓', seasons: ['summer'], size: 1254, bounds: [150, 300, 1083, 1153], paintedWidth: 52 },
    melon: { name: '甜瓜', seasons: ['summer'], size: 1254, bounds: [136, 256, 1119, 1206], paintedWidth: 54 },
    tomato: { name: '番茄', seasons: ['summer'], size: 1254, bounds: [129, 88, 1124, 1224], paintedWidth: 45 },
    corn: { name: '玉米', seasons: ['summer', 'fall'], size: 1254, bounds: [344, 63, 888, 1208], paintedWidth: 37 }
  };
  const springRows = [
    ['potato', 'potato', 'cauliflower', 'cauliflower', 'green-bean', 'green-bean'],
    ['parsnip', 'parsnip', 'strawberry', 'strawberry', 'strawberry', 'potato']
  ];
  const summerRows = [
    ['tomato', 'tomato', 'blueberry', 'blueberry', 'corn', 'corn'],
    ['blueberry', 'melon', 'melon', 'blueberry', 'melon', 'blueberry']
  ];
  const seasonalRows = { spring: springRows, summer: summerRows };
  const assetFolders = { spring: 'spring-unified-v3', summer: 'summer-unified-v1' };
  function layoutForSeason(season) {
    const rows = seasonalRows[season];
    if (!rows) return [];
    return rows.flatMap((row, rowIndex) => row.map((key, column) => {
      const crop = catalog[key];
      if (!crop.seasons.includes(season)) throw new Error(`Out-of-season crop: ${key}`);
      return {
        key, row: rowIndex, column,
        x: (rowIndex === 0 ? 1255 : 1238) + column * 62,
        y: (rowIndex === 0 ? 624 : 665) + column * 5,
        ...crop,
        src: `../../assets/crops/${assetFolders[season]}/${key}.png`
      };
    }));
  }

  function mountLayer(doc, layer) {
    const season = layer.dataset.cropSeason;
    const label = season === 'summer' ? '夏季' : '春季';
    const images = layoutForSeason(season).map(crop => {
      const [left, , right, bottom] = crop.bounds;
      const img = doc.createElement('img');
      img.className = 'crop-plant';
      img.src = crop.src;
      img.alt = '';
      img.title = `${label} · ${crop.name}`;
      img.width = crop.size;
      img.height = crop.size;
      img.draggable = false;
      img.dataset.crop = crop.key;
      img.dataset.row = String(crop.row);
      img.dataset.column = String(crop.column);
      img.style.left = `${crop.x / scene.width * 100}%`;
      img.style.top = `${crop.y / scene.height * 100}%`;
      img.style.width = `${crop.paintedWidth * crop.size / (right - left) / scene.width * 100}%`;
      img.style.transform = `translate(-${(left + right) / 2 / crop.size * 100}%, -${bottom / crop.size * 100}%)`;
      img.style.zIndex = String(crop.row + 1);
      return img;
    });
    layer.replaceChildren(...images);
  }

  if (typeof module !== 'undefined' && module.exports) module.exports = { catalog, layoutForSeason, scene };
  if (root.document && root.document.body?.dataset.farmArt !== 'native') {
    root.document.querySelectorAll('.crop-layer').forEach(layer => mountLayer(root.document, layer));
  }
})(typeof window !== 'undefined' ? window : globalThis);
