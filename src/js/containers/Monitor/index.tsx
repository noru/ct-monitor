import React from 'react'
import { translate } from 'react-i18next'
import { flow, padding, randomInt } from 'noru-utils'
import Header from '#/js/components/Header'
import { Pagination } from 'antd'
import Board from './components/DeviceBoard'
import { Header as FBTitle } from './components/FlipBoard'
import Clock from './components/Clock'
import Animate from 'rc-animate'
import velocity from 'velocity-animate'
import { connect } from 'dva'
import './index.scss'

export class Monitor extends React.Component<any, any> {
  _loopId: any = 0

  state = {
    currentPage: 1,
  }

  animEnter(node, done) {
    let ok = false

    function complete() {
      if (!ok) {
        ok = true
        done()
      }
    }
    node.style.right = '-100vw'
    velocity(
      node,
      {
        right: 0,
      },
      {
        duration: 1000,
        complete,
      },
    )
    return {
      stop() {
        velocity(node, 'finish')
        complete()
      },
    }
  }

  animLeave(node, done) {
    let ok = false

    function complete() {
      if (!ok) {
        ok = true
        done()
      }
    }

    velocity(
      node,
      {
        right: '100vw',
      },
      {
        duration: 1000,
        complete,
      },
    )
    return {
      stop() {
        velocity(node, 'finish')
        complete()
      },
    }
  }

  go2Page = page => {
    this.setState({ currentPage: page })
  }

  componentDidMount() {
    let { dispatch, devices } = this.props
    if (devices.length === 0) {
      dispatch({ type: 'device/get/devices' })
    }
    dispatch({ type: 'device/get/monitorData' })
    this._loopId = setInterval(() => {
      dispatch({ type: 'device/get/monitorData' })
    }, 2 * 60 * 1000)
  }

  componentWillUnmount() {
    clearInterval(this._loopId)
  }

  render() {
    let { t, devices, data } = this.props
    let { currentPage } = this.state

    let displayDevices = devices.slice((currentPage - 1) * 2, currentPage * 2)

    let dsiplayData = displayDevices.map(d => data[d.aeTitle]).map(transformData)

    return (
      <div className="monitor">
        <Header t={t} actived="monitor" />
        <div className="clock">
          <label>{t`当前时间`}:</label>
          <Clock />
        </div>
        <Animate
          className="rc-animate"
          component="div"
          animation={{
            enter: this.animEnter,
            leave: this.animLeave,
          }}
        >
          <div className="animate-wrapper" key={currentPage}>
            <div className="board-container">
              {displayDevices.map((d, i) => {
                return (
                  <Board
                    key={i}
                    img={getImgByType(d.deviceType)}
                    location={d.location}
                    name={d.name}
                    id={d.aeTitle}
                    type={d.deviceType}
                    vendor={d.manufacture}
                    data={dsiplayData[i]}
                  />
                )
              })}
            </div>
          </div>
        </Animate>

        <div className="pagination">
          <Pagination
            current={currentPage}
            total={devices.length}
            defaultPageSize={2}
            hideOnSinglePage
            onChange={this.go2Page}
          />
        </div>
      </div>
    )
  }
}

export default flow(
  Monitor,
  translate(),
  connect(state => {
    return {
      devices: state.device.devices,
      data: state.device.monitorData,
    }
  }) as any,
)

function transformData(data) {
  data = data || {}
  return [
    {
      title: <FBTitle icon="icon-switch.svg" text="开机时间" />,
      type: 'clock',
      value: new Date(data.uptime || 0),
      footer: '昨日开机时间: ' + data.yestodayuptime || 'N/A',
    },
    {
      title: <FBTitle icon="icon-users.svg" text="已完成检查人数" />,
      type: 'count',
      value: padding(data.patientcount || 0, '0', 6),
      footer: '昨日检查人数: ' + data.yesterdaycount || 'N/A',
    },
    {
      title: <FBTitle icon="icon-heart.svg" text="已完成检查部位数" />,
      type: 'count',
      value: padding(data.protocolcount || 0, '0', 6),
      footer: '昨日检查部位数: ' + data.yesterdayprotocolcount || 'N/A',
    },
    {
      title: <FBTitle icon="icon-stethoscope.svg" text="上一个检查完成时间" />,
      type: 'clock',
      value: new Date(data.laststudytime || 0),
    },
  ]
}

function getImgByType(type: string) {
  switch (type) {
    case 'CT':
      return `CT${randomInt(1, 4)}.png`
    case 'MR':
      return `MR${randomInt(1, 2)}.png`
    case 'IGS':
      return `IGS${randomInt(1, 1)}.png`
  }
  return 'CT1.png'
}
