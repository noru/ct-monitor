import React from 'react'
import { Clock as TimeClock } from '../FlipBoard'
import './index.scss'

export default class Clock extends React.Component<any, any> {

  _loopId: any = 0
  state = {
    time: new Date,
  }

  componentDidMount() {
    this._loopId = setInterval(() => {
      this.setState({ time: new Date })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this._loopId)
  }

  render() {
    let { className } = this.props
    let { time } = this.state
    return (
      <div className={'clock-container ' + className }>
        <span>{time.getFullYear()}-{time.getMonth()}-{time.getDay()}</span>
        <TimeClock time={time} mode="24h" />
      </div>
    )
  }
}