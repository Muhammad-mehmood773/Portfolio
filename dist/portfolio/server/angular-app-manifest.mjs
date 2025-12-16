
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2194, hash: '1c2b8e68bc822f907ce21f95d0b35877c4bf5ed4fdd428bd8c6961954542cf2d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 969, hash: 'e60a0e2ea07eea1415c8bb602b209c38d2dbe2ed60cd5d93d29f361a31e79d7e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 15534, hash: 'dac013d8250011daca3b0c7503383245cd5d12a4ea8bde8a71995dedef27625b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-JJFX674H.css': {size: 25540, hash: 'trdSKMnnmPg', text: () => import('./assets-chunks/styles-JJFX674H_css.mjs').then(m => m.default)}
  },
};
