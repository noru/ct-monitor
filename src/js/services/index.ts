import '#/js/services/interceptors'

if (__USE_MOCK__) {
  require('./mocks/index').default()
}

export { default as DeviceService } from '#/js/services/device'
export { default as UserService } from '#/js/services/user'
