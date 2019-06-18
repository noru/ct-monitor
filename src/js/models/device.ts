import { DeviceService } from '#/js/services'
import produce from 'immer'

interface DeviceState {
  list: any[],
  devices: any[],
  dashboardList: any[],
  monitorData: any,
}

export default {
  namespace: 'device',

  state: {
    list: new Array,
    devices: new Array,
    dashboardList: new Array,
    monitorData: {},
  } as DeviceState,

  effects: {
    *'get/list'({}, { put, call }) {
      let data = yield call(DeviceService.list)
      yield put({
        type: 'set/list',
        payload: data,
      })
    },
    *'get/devices'({}, { put, call }) {
      let data = yield call(DeviceService.getDevices)
      yield put({
        type: 'set/devices',
        payload: data,
      })
    },
    *'get/dashboardList'({}, { put, call }) {
      let data = yield call(DeviceService.getDashboardList)
      yield put({
        type: 'set/dashboardList',
        payload: data,
      })
    },
    *'get/monitorData'({}, { put, call }) {
      let data = yield call(DeviceService.getMonitoringData)
      yield put({
        type: 'set/monitorData',
        payload: data,
      })
    },
  },

  reducers: {
    'set/list'(state, { payload }) {
      return produce(state, s => { s.list = payload })
    },
    'set/devices'(state, { payload }) {
      return produce(state, s => { s.devices = payload } )
    },
    'set/dashboardList'(state, { payload }) {
      return produce(state, s => { s.dashboardList = payload } )
    },
    'set/monitorData'(state, { payload }) {
      return produce(state, s => { s.monitorData = payload } )
    },
  },
}