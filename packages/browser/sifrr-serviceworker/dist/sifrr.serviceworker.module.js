/*! Sifrr.Serviceworker v0.0.2-alpha - sifrr project | MIT licensed | https://github.com/sifrr/sifrr */
class SW {
  constructor(options) {
    this.options = Object.assign({
      version: 1,
      fallbackCacheName: 'fallbacks',
      defaultCacheName: 'default',
      policies: {},
      fallbacks: {},
      precacheUrls: []
    }, options);
    this.options.policies.default = Object.assign(this.options.policies.default || {}, {
      policy: 'NETWORK_FIRST',
      cacheName: this.options.defaultCacheName
    });
  }

  precache(urls = this.options.precacheUrls, fbs = this.options.fallbacks) {
    const me = this;
    let promises = [];
    urls.forEach(u => {
      let req = me.requestFromURL(u);
      return promises.push(me.responseFromNetwork(req, me.findRegex(u, me.options.policies).cacheName));
    });

    for (let value of Object.values(fbs)) {
      let req = this.requestFromURL(value);
      promises.push(this.responseFromNetwork(req, this.options.fallbackCacheName));
    }

    return Promise.all(promises);
  }

  setup(skipWaiting = true) {
    let me = this;
    self.addEventListener('install', event => {
      // replace old sw ASAP
      if (skipWaiting) self.skipWaiting();
      event.waitUntil(me.precache());
    });
    self.addEventListener('activate', () => {
      const version = '-v' + me.options.version; // remove old version caches

      caches.keys().then(cacheNames => {
        return cacheNames.filter(cacheName => cacheName.indexOf(version) < 0);
      }).then(cachesToDelete => {
        return Promise.all(cachesToDelete.map(cacheToDelete => {
          return caches.delete(cacheToDelete);
        }));
      }).then(() => self.clients.claim());
    });
    self.addEventListener('fetch', event => {
      const request = event.request;
      const otherReq = request.clone();
      const oreq = request.clone();

      if (request.method === 'GET') {
        event.respondWith(me.respondWithPolicy(request).then(response => {
          if (!response.ok && response.status > 0 && me.findRegex(oreq.url, me.options.fallbacks)) {
            throw Error('response status ' + response.status);
          }

          return response;
        }).catch(e => me.respondWithFallback(otherReq, e)));
      }
    });
  }

  setupPushNotification(defaultTitle = '', defaultOptions = {
    body: ''
  }, onNotificationClick) {
    self.addEventListener('push', function (event) {
      console.log(event);
      let data = {};

      if (event.data) {
        data = event.data.json();
      }

      const title = data.title || defaultTitle;
      const options = Object.assign(defaultOptions, data);

      for (let k in options) {
        if (k.indexOf('on') === 0) options[k] = new Function(options[k]);
        console.log(k, options[k]);
      }

      event.waitUntil(self.registration.showNotification(title, options));
    });
    self.addEventListener('notificationclick', onNotificationClick);
  }

  respondWithFallback(request, error) {
    const fallback = this.requestFromURL(this.findRegex(request.url, this.options.fallbacks));

    if (fallback !== undefined) {
      return this.responseFromCache(fallback, this.options.fallbackCacheName);
    } else {
      throw error;
    }
  }

  respondWithPolicy(request) {
    const req1 = request.clone();
    const req2 = request.clone();
    const config = this.findRegex(request.url, this.options.policies);
    const policy = config.policy;
    const cacheName = config.cacheName || this.options.defaultCacheName;
    let resp;

    switch (policy) {
      case 'NETWORK_ONLY':
        resp = this.responseFromNetwork(req1, cacheName, false);
        break;

      case 'CACHE_FIRST':
      case 'CACHE_ONLY':
        resp = this.responseFromCache(req1, cacheName).catch(() => this.responseFromNetwork(request, cacheName));
        break;

      case 'CACHE_AND_UPDATE':
        resp = this.responseFromCache(req1, cacheName).catch(() => this.responseFromNetwork(request, cacheName));
        this.responseFromNetwork(req2, cacheName);
        break;

      default:
        resp = this.responseFromNetwork(req1, cacheName).catch(() => this.responseFromCache(request, cacheName));
        break;
    }

    return resp;
  }

  responseFromNetwork(request, cache, putInCache = true) {
    return caches.open(cache + '-v' + this.options.version).then(cache => fetch(request).then(response => {
      if (putInCache) cache.put(request, response.clone());
      return response;
    }));
  }

  responseFromCache(request, cache) {
    return caches.open(cache + '-v' + this.options.version).then(cache => cache.match(request)).then(resp => {
      if (resp) return resp;else throw 'Cache not found for ' + request.url;
    });
  }

  requestFromURL(url, method = 'GET') {
    return new Request(url, {
      method: method
    });
  }

  findRegex(url, policies) {
    for (let [key, value] of Object.entries(policies)) {
      const regex = new RegExp(key);
      if (regex.test(url)) return value;
    }

    return policies['default'];
  }

}

var sifrr_serviceworker = SW;

export default sifrr_serviceworker;
/*! (c) @aadityataparia */
