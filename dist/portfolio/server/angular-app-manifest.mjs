
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
    'index.csr.html': {size: 2216, hash: 'bf3d41577c42068dc5ef7c965c5998cf6c62fff4ec3e8cfcb3831cfdfe0e9915', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 991, hash: '5bb420a2e5e3d02b00b0f9c7cedf028eb93b5c5507a25e87e5645f4f1e5c5b00', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 15556, hash: 'a46bfeced07b39ad6b0cf724b0fb495b5425e8c22d55e406e379f88cc34e891d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-C7LIHTLL.css': {size: 27340, hash: 'S4radAMpvlw', text: () => import('./assets-chunks/styles-C7LIHTLL_css.mjs').then(m => m.default)}
  },
};
