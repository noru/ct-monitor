import * as cache from 'lscache'

export const DEFAULT = {
}

function resetBucket(type: string = 'config') {
  cache.setBucket(type)
}

export default {

  get(key: string): any {
    resetBucket()
    return cache.get(key) || DEFAULT[key]
  },

  set(key: string, conf: any) {
    resetBucket()
    cache.set(key, conf)
  },

  clear() {
    resetBucket()
    cache.flush()
  },

}

// export const AuthConfig = {

//   get(key: string): any {
//     resetBucket('auth')
//     return cache.get(key)
//   },

//   set(key: string, conf: any, expire?: number) {
//     resetBucket('auth')
//     cache.set(key, conf, expire)
//   },

//   clear() {
//     resetBucket('auth')
//     cache.flush()
//   },
// }