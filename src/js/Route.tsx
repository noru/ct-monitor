import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from '#/js/i18n'
import Monitor from '#/js/containers/Monitor'
// import dynamic from 'dva/dynamic'

export default function() {

    return (
      <I18nextProvider i18n={i18n}>
        <Router>
          <Switch>
            <Route exact path="/" component={Monitor}/>
          </Switch>
        </Router>
      </I18nextProvider>
    )

}
