import React from 'react'
import FlipCard from '#/js/components/FlipCard'
import { padding } from 'noru-utils'
import './index.scss'

export const Header = ({ icon, text }: { icon: string, text: string}) => {

  return (
    <span>
      <img className="title-icon" src={require(`../../../../../assets/img/${icon}`)}/>
      {text}
    </span>
  )

}

interface ClockProps {
  time: Date,
  mode?: '24h' | '12h'
}

export const Clock: React.SFC<ClockProps> = ({ time, mode }) => {
  let hour: any = time.getHours()

  let period = 'AM'
  if (mode === '12h' && hour > 12) {
    hour -= 12
    period = 'PM'
  }
  hour = padding(hour, '0', 2)
  let min = padding(time.getMinutes(), '0', 2)
  let sec = padding(time.getSeconds(), '0', 2)
  return (
    <div className="clock-flipper">
      {
        mode !== '24h' &&
        <div className="period-indicator">{period}</div>
      }
      <FlipCard content={hour}/>
      <FlipCard content={min}/>
      <FlipCard content={sec}/>
    </div>
  )
}

interface NumberProps {
  value: number
  split?: boolean
}
const Count: React.SFC<NumberProps> = ({ value, split }) => {

  let valueStr = String(value)
  let _value = split ? valueStr.split('') : [valueStr]
  return (
    <div className="count-flipper">
      { _value.map((v, i) => <FlipCard key={i} content={v}/>) }
    </div>
  )
}

export interface Props {
  title: JSX.Element | string
  type: 'clock' | 'count'
  value: number | Date | string
  footer?: string
  skip?: boolean
}
export default class FlipBoard extends React.Component<Props, any> {

  render() {
    let { title, type, value, footer } = this.props
    return (
      <div className="flip-board">
        <h1>{title}</h1>
        <div className="flip-content">
          {
            type === 'clock'
            ? <Clock time={value as Date} />
            : <Count value={value as number} split/>
          }
        </div>
        { footer &&
          <h1 className="flip-board-footer">{footer}</h1>
        }
      </div>
    )
  }
}
