import { UserService } from '#/js/services'
import produce from 'immer'

export default {
  namespace: 'user',

  state: {
    list: new Array,
    roles: new Array,
  },

  effects: {
    *'get/list'({}, { put, call }) {
      let data = yield call(UserService.list)
      yield put({
        type: 'set/list',
        payload: data,
      })
    },
    *'get/roles'({}, { put, call }) {
      let data = yield call(UserService.getRoles)
      yield put({
        type: 'set/roles',
        payload: data,
      })
    },
  },

  reducers: {
    'set/list'(state, { payload }) {
      return produce(state, s => { s.list = payload })
    },
    'set/roles'(state, { payload }) {
      return produce(state, s => { s.roles = payload })
    },
  },
}