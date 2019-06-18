import React from 'react'
import { translate } from 'react-i18next'
import { flow } from 'noru-utils'
import './index.scss'

interface Props {
  img     : string
  id      : string
  name    : string
  type    : string
  vendor  : string
  location: string
  [props: string]: any
}

const LabelValue = ({ label, value }) => {
  return (
    <div>
      <label>{label}</label>
      <span>{value}</span>
    </div>
  )
}

const DeviceMeta: React.SFC<Props> = ({ t, img, id, name, type, vendor, location }) => {

  return (
    <div className="device-meta">

      <div className="device-image">
        <img src={require(`../../../../../assets/img/${img}`)} />
      </div>

      <div className="device-info">
        <h1>{id}</h1>
        <LabelValue label={t`设备型号`} value={type} />
        <LabelValue label={t`资产名称`} value={name} />
        <LabelValue label={t`设备厂商`} value={vendor} />
        <LabelValue label={t`安装地点`} value={location} />
      </div>
    </div>
  )
}

export default flow<React.SFC<Props>>(
  DeviceMeta,
  translate(),
)