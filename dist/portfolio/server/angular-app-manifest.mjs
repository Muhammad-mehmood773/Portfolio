
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
    'index.csr.html': {size: 2211, hash: '63ebdfd3ba1cc8052d98cf65fc03763772ea5801fb45b625f0bb64971ba96522', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 986, hash: 'ce9cd2a9a58dba48f497e0a5ec21d945c97b359247d1e53d37b45c74cd791087', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 15551, hash: 'c375d5113cdd1a237e3b214ad2dfe376646fd15dd2d0448318c5b86a9a56c150', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-JJFX674H.css': {size: 25540, hash: 'trdSKMnnmPg', text: () => import('./assets-chunks/styles-JJFX674H_css.mjs').then(m => m.default)}
  },
};
