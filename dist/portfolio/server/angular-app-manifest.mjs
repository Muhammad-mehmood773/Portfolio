
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Deploy-Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Deploy-Portfolio"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Deploy-Portfolio",
    "route": "/Deploy-Portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2233, hash: 'a06f9b6ad52ba19fddc26c3471f16fef04fd948821eda4d6d8f1618cdc426c67', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1008, hash: 'aa4a1d85a49565184ed1be6613e02a14104da381d2e16d1524a4f52076849e8b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 15573, hash: '0601f750747c7a744b474e2b2d408f82852f3ad1388045ea4b9bc3c22e75ea15', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-C7LIHTLL.css': {size: 27340, hash: 'S4radAMpvlw', text: () => import('./assets-chunks/styles-C7LIHTLL_css.mjs').then(m => m.default)}
  },
};
