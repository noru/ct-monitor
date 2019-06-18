import axios from 'axios'
import { groupBy, keyBy } from 'lodash-es'

export const URL = {
  list: '/cpmboard/restdata/deviceQuery.do?reload=false',
  getDevices: '/cpmboard/admin/getDevices.do',
  uploadPic: '/cpmboard/admin/uploadFile.do',
  updateDevice: '/cpmboard/admin/updateDevice.do',
  getDashboardList: '/cpmboard/admin/getBoardList.do',
  getMonitoringData: '/cpmboard/restdata/monitor.do?reload=false',
}

class DeviceService {

  list() {
    return axios.get(URL.list).then((data) => {
      return dataConfig(data.data.columnList, groupBy(data.data.data, d => d[1]))
    })
  }

  getDashboardList() {
    return axios(URL.getDashboardList).then(resp => resp.data)
  }

  getDevices() {
    return axios.get(URL.getDevices).then(resp => resp.data)
  }

  updateDevice(device: any) {
    return axios.post(URL.updateDevice, device)
  }

  getMonitoringData() {
    return axios.get(URL.getMonitoringData)
      .then(resp => transformMornitoringData(resp.data))
      .then(resp => keyBy(resp, i => i.ae_title))
  }
}

function transformMornitoringData(raw) {
  let pick = item => {
    let result = {}
    raw.columnList.forEach(col => {
      result[col.name] = item[col.index]
    })
    return result
  }
  return raw.data.map(d => pick(d))
}

const dataConfig = (column, data) => {
  let result = {}
  for (const key in data) {
    result[key] = data[key].map((value) => {
      const deviceData = {}
      column.map((columnItem, index) => {
        deviceData[columnItem.name] = value[index]
      })

      return deviceData
    })
  }

  return result
}

export default new DeviceService