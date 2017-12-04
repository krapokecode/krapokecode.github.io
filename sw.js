importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "blog",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.1a90f19d1a6588378137.js",
    "revision": "e20f615cf62f4f36e4ba2503ecc0c6cf"
  },
  {
    "url": "/_nuxt/common.9aa4ac4a0fef3ebdfeb4.js",
    "revision": "6a1bf7e621b6b030ab6d70bf878d7e39"
  },
  {
    "url": "/_nuxt/layouts/default.0fb8816ca1939bfbca54.js",
    "revision": "7fb7842cfab9d3b3f5232d7d4cc93659"
  },
  {
    "url": "/_nuxt/manifest.ea57347bd7d95f892116.js",
    "revision": "9f758962bf5920e591e229acfb6718d2"
  },
  {
    "url": "/_nuxt/pages/about.c06d6d6621a1761cb07b.js",
    "revision": "c01099695388a805b9cbe585f7205072"
  },
  {
    "url": "/_nuxt/pages/index.e285deb7f5c35ea620a7.js",
    "revision": "2f74603a365750741f3dd098bb68eba5"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

