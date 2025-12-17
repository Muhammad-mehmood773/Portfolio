
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
    'index.csr.html': {size: 2233, hash: 'b684cf4c4470bcc7b58c56a74c74430475991817c4b64fb09bdeb5247fac6fae', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1008, hash: '8a635f572507aaf76413233e958a34a03d94d250f2002e83f6f7747ec4f8cd53', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 15573, hash: 'f75de5ede5d531e0025659ad01967683a5f5db9093b8034addb5aff80c48ac8b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-AVUVMBIE.css': {size: 26171, hash: 'kAGdCqz3xDQ', text: () => import('./assets-chunks/styles-AVUVMBIE_css.mjs').then(m => m.default)}
  },
};
