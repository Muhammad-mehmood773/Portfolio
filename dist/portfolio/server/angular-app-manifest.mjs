
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
    'index.csr.html': {size: 2156, hash: '9ad1f4af9cf6a1b65c901530809ee4beaf8304ac8d8cc4814954ac49a404f8e4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 969, hash: 'e1741565b33059dd0db084cb9ad170123111881d75703c7e55cdce6ad71e293b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 11896, hash: 'c23a9975455a06c3d75ca8cb147f0fc56eb049dbf0154e4b2a5766890d869b40', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZXST7ZJW.css': {size: 5240, hash: 'UqfJG3h2FZk', text: () => import('./assets-chunks/styles-ZXST7ZJW_css.mjs').then(m => m.default)}
  },
};
