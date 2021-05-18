import React from 'react'
import { BrowserRouter as Route, Switch, useRouteMatch } from 'react-router-dom'
import Cart from './components/Cart'

function User() {
  let { path } = useRouteMatch()
  return (
    <div>
      <h1>Espace client</h1>
      <Switch>
        <Route exact path={`${path}/cart`}>
          <Cart />
        </Route>
      </Switch>
    </div>
  )
}

export default User
