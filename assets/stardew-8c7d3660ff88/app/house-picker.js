(() => {
  const names = {
    'beach':['沙滩小屋','Beach cabin','ビーチキャビン'], 'big-shed':['大棚屋','Big shed','大きな物置'], 'deluxe-coop':['豪华鸡舍','Deluxe coop','デラックス鶏小屋'],
    'elliott':['艾利欧特的小屋',"Elliott’s cabin",'エリオットの小屋'], 'farmhouse':['农舍','Farmhouse','牧場の家'], 'fish-shop':['鱼店','Fish shop','魚屋'],
    'island-farmhouse':['姜岛农舍','Island farmhouse','島の家'], 'junimo':['祝尼魔小屋','Junimo hut','ジュニモの小屋'], 'leah':['莉亚的小屋',"Leah’s cottage",'リアのコテージ'],
    'log':['原木小屋','Log cabin','丸太のキャビン'], 'manor-house':['镇长庄园','Mayor’s manor','町長の家'], 'mill':['磨坊','Mill','製粉機'],
    'neighbor':['邻居小屋','Neighbor cabin','お隣のキャビン'], 'plank':['木板小屋','Plank cabin','板張りのキャビン'], 'rustic':['乡村小屋','Rustic cabin','田舎のキャビン'],
    'shed':['棚屋','Shed','物置'], 'slime-hutch':['史莱姆小屋','Slime hutch','スライムハッチ'], 'stone':['石头小屋','Stone cabin','石のキャビン'],
    'trailer':['拖车小屋','Trailer','トレーラー'], 'witch-hut':['女巫小屋','Witch’s hut','魔女の小屋'], 'wizard-tower':['法师塔','Wizard’s tower','魔術師の塔']
  };
  window.openHousePicker = (node, choices, trigger) => {
    const dialog = document.createElement('dialog');
    dialog.className = 'house-dialog';
    dialog.setAttribute('aria-labelledby','house-heading');
    const heading = document.createElement('h2');
    heading.id = 'house-heading';
    heading.textContent = window.farmText('选择小屋')+' · '+node.id;
    const actions = document.createElement('div');
    actions.className = 'house-actions';
    const grid = document.createElement('div');
    grid.className = 'house-choices';
    const id = node.rawId || node.id;
    function choose(building) {
      window.cfsmAdapter.setBuildingOverride(id, building);
      dialog.close();
    }
    function button(text, action) {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = text;
      b.addEventListener('click',action);
      return b;
    }
    for (const building of choices) {
      const label = names[building.replace(/-3$/,'')];
      const b = button(label?.[{ 'zh-CN':0, en:1, ja:2 }[window.farmLocale]] || building, () => choose(building));
      const image = document.createElement('img');
      image.alt = '';
      image.src = window.nodeFarmSprite(building);
      b.prepend(image);
      b.setAttribute('aria-pressed',String(node.building === building));
      grid.append(b);
    }
    actions.append(button(window.farmText('自动分配'), () => choose(null)), button(window.farmText('关闭'), () => dialog.close()));
    dialog.append(heading,grid,actions);
    dialog.addEventListener('close', () => {
      dialog.remove();
      if (trigger.isConnected) trigger.focus();
      else Array.from(document.querySelectorAll('.building-picker')).find(b => b.dataset.nodeId === id)?.focus();
    }, {once:true});
    document.body.append(dialog);
    dialog.showModal();
    grid.querySelector('[aria-pressed="true"]')?.focus({preventScroll:true});
  };
})();
