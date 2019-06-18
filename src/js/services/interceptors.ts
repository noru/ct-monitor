import axios from 'axios'

const RequestInterceptors = [
]
const ResponseInterceptors = [
]

RequestInterceptors.forEach(i => _use(i, axios.interceptors.request))
ResponseInterceptors.forEach(i => _use(i, axios.interceptors.response))

function _use(interceptor: any, port: any) {

  if (typeof interceptor === 'function') {
    port.use(interceptor)
  } else {
    port.use(interceptor.resolve, interceptor.reject)
  }

}