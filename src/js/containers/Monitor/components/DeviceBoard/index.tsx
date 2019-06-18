import React from 'react'
import { translate } from 'react-i18next'
import { flow } from 'noru-utils'
import DeviceMeta from '../DeviceMeta'
import FlipBoard, { Props as FlipBoardProps } from '../FlipBoard'
import './index.scss'

export interface Props {
  img     : string
  id      : string
  name    : string
  type    : string
  vendor  : string
  location: string
  data    : FlipBoardProps[]
}

const DeviceBoard: React.SFC<Props> = (props) => {

  let { data, ...rest } = props
  return (
    <div className="device-board">
      <DeviceMeta {...rest} />
      <div className="device-feed">
        { data.map((d, i) => <FlipBoard key={i} {...d}/>) }
      </div>
    </div>
  )
}

export default flow<React.SFC<Props>>(
  DeviceBoard,
  translate(),
)