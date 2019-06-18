import React from 'react'
import './index.scss'

export const getNavItems: () => NavItem[] = () => [
  { id: 'index', text: `首页`, link: '/' },
  { id: 'monitor', text: `设备监控`, link: '/monitor' },
  { id: 'device_meta', text: `设备管理`, link: '/devices' },
  { id: 'user', text: `用户管理`, link: '/users' }, // todo, temperary hide it
]

interface NavItem {
  id       : string
  text     : string
  link     : string
  isActive?: boolean
}

interface Props {
  items: NavItem[]
}

export class Nav extends React.Component<Props, any> {

  render() {
    let { items } = this.props
    return(
      <div className="navbar tabs">
        <ul>
          { items.map(tab => <li key={tab.id} className={tab.isActive ? 'is-active' : ''}>
              {/* <Link to={tab.link}>{tab.text}</Link> */}
              <a>{tab.text}</a>
            </li>)
          }
        </ul>
    </div>
    )
  }

}

export default Nav