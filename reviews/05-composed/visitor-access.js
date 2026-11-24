(() => {
  const t = message => window.farmText?.(message) || message;
  let loader;
  window.openMonitorLogin = apiBase => {
    if (window.farmWorkers) window.farmWorkers.clearWorkerToken(apiBase);
    else localStorage.removeItem('jwt_token');
    location.assign(new URL('/admin#/admin', apiBase));
  };
  function loadChallenge() {
    if (window.turnstile) return Promise.resolve(window.turnstile);
    if (!loader) loader = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      script.onload = () => window.turnstile ? resolve(window.turnstile) : reject(new Error());
      script.onerror = reject;
      document.head.append(script);
    }).catch(error => { loader = null; throw error; });
    return loader;
  }

  window.showMonitorAccess = (panel, state, config, apiBase, retry) => {
    if (!panel) return;
    const verify = state === 'auth' && [true, 'true', 1].includes(config?.turnstile_enabled)
      && config.turnstile_site_key && config.verified !== true;
    const key = [state, apiBase, verify && config.turnstile_site_key, window.farmLocale].join('|');
    if (panel.dataset.access === key) return;
    if (panel.widgetId != null) window.turnstile.remove(panel.widgetId);
    panel.widgetId = null;
    panel.dataset.access = key;
    panel.replaceChildren();
    panel.hidden = !['auth', 'stale', 'paused', 'retry'].includes(state);
    if (panel.hidden) return;
    const message = document.createElement('span');
    message.setAttribute('role', 'status');
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = t('重新连接');
    button.onclick = retry;
    panel.append(message, button);
    if (state !== 'auth') {
      message.textContent = t(({stale:'连接中断，显示上次同步的数据。', paused:'实时连接已按站点设置暂停。', retry:'暂时无法连接监控站点。'})[state]);
      return;
    }
    if (!verify) {
      message.textContent = t('登录站点后可继续查看节点。');
      const login = document.createElement('a');
      login.href = new URL('/admin#/admin', apiBase).href;
      login.target = '_blank';
      login.rel = 'noopener';
      login.textContent = t('登录站点');
      panel.insertBefore(login, button);
      return;
    }
    message.textContent = t('完成访问验证后将自动读取节点。');
    const host = document.createElement('div');
    panel.append(host);
    button.textContent = t('验证访问');
    button.onclick = async () => {
      button.disabled = true;
      const failed = () => {
        if (!host.isConnected) return;
        button.disabled = false;
        message.textContent = t('验证未完成，请重试。');
      };
      try {
        const client = await loadChallenge();
        if (!host.isConnected) return;
        if (panel.widgetId != null) client.remove(panel.widgetId);
        panel.widgetId = client.render(host, {
          sitekey:config.turnstile_site_key, size:'flexible',
          callback:async token => {
            try {
              const headers = {...window.farmWorkers?.workerHeaders(apiBase), 'X-Turnstile-Token':token};
              delete headers['X-Turnstile-Verified'];
              const res = await fetch(apiBase + '/api/config', {headers, credentials:'include', cache:'no-store', signal:AbortSignal.timeout(15000)});
              const result = res.ok && await res.json();
              if (!host.isConnected) return;
              if (result.verified !== true) return failed();
              if (window.farmWorkers) window.farmWorkers.rememberWorkerProof(apiBase, result.turnstile_verified);
              else if (result.turnstile_verified && new URL(apiBase).origin === location.origin)
                localStorage.setItem('turnstile_verified', result.turnstile_verified);
              button.disabled = false;
              await retry();
            } catch { failed(); }
          },
          'error-callback':failed, 'expired-callback':failed, 'timeout-callback':failed
        });
      } catch { failed(); }
    };
  };
})();
