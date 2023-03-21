const taritaic = "taritaic-v1"


const assets = [

]

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(taritaic).then(cache => {
      cache.addAll(assets)
    })
  )
})