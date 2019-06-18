import React from 'react'
import { translate } from 'react-i18next'
import { flow } from 'noru-utils'
import Nav, { getNavItems } from '#/js/components/Nav'
import logo from '#/assets/img/ge_logo.png'
import './index.scss'

interface Props {
  t: any
  actived: string
}

const Header: React.SFC<Props> = ({ t, actived }) => {
  let navItems = getNavItems()
  let activeItem = navItems.find(i => i.id === actived)
  if (activeItem) {
    activeItem.isActive = true
  }

  return (
    <div className="header">
      <img className="header-logo" src={logo} />
      <span className="header-title">{t`app_name`}</span>
      <Nav items={navItems}/>
    </div>
  )
}

export default flow<React.SFC<Props>>(
  Header,
  translate(),
)