import React from 'react'
import './index.scss'

const AnimatedCard = ({ position, animation, digit }) => {
  return(
    <div className={`flipCard ${position} ${animation} half-card`}>
      <span>{digit}</span>
    </div>
  )
}

const StaticCard = ({ position, digit }) => {
  return(
    <div className={position + ' half-card'}>
      <span>{digit}</span>
    </div>
  )
}

interface Props {
  content: string | number,
  className?: string,
}
export default class FlipCard extends React.Component<Props, any> {

  static defaultProps = {
    className: '',
  }

  _shuffle = false
  _last: number | string = ''

  render() {
    let { content, className } = this.props

    let last = this._last
    if (content !== this._last) { // don't flip if content doesn't change
      this._shuffle = !this._shuffle
      this._last = content
    }
    let digit1 = this._shuffle ? last : content
    let digit2 = !this._shuffle ? last : content
    let animation1 = this._shuffle ? 'fold' : 'unfold'
    let animation2 = !this._shuffle ? 'fold' : 'unfold'

    return (
      <div className={'flipUnitContainer ' + className} >

        <StaticCard position={'upperCard'} digit={content} />
        <StaticCard position={'lowerCard'} digit={last} />

        <AnimatedCard position={'first'} digit={digit1} animation={animation1} />
        <AnimatedCard position={'second'} digit={digit2} animation={animation2} />

      </div>
    )
  }
}
