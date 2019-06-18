// dependencies
import dva from 'dva'
import createLoading from 'dva-loading'
import '#/js/polyfills'
// components & stores
import Route from '#/js/Route'
// stylesheets
import '#css/main'
// models
import DeviceModel from '#/js/models/device'
import UserModel from '#/js/models/user'
// import UserModel from '#/js/models/user'

if (module.hot) {
  module.hot.accept()
}

const app = dva({
  onError(e) {
    console.error(e.message)
  },
})

app.use(createLoading())
app.model(DeviceModel as any)
app.model(UserModel as any)
// app.model(UserModel as any)
app.router(Route as any)
app.start('#app')

export default app
