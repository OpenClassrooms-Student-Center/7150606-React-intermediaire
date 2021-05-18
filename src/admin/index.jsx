import React from 'react'
import { BrowserRouter as Route, Switch, useRouteMatch } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Settings from './components/Settings'
import Money from './components/Money'

function Admin() {
  let { path } = useRouteMatch()
  return (
    <div>
      <h1>Espace admin</h1>
      <Switch>
        <Route exact path={`${path}/dashboard`}>
          <Dashboard />
        </Route>
        <Route exact path={`${path}/settings`}>
          <Settings />
        </Route>
        <Route exact path={`${path}/money`}>
          <Money />
        </Route>
      </Switch>
    </div>
  )
}

export default Admin
