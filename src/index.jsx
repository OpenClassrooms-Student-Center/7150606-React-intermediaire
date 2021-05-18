import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import User from './user'
import Admin from './admin'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <nav style={{ display: 'flex', flexDirection: 'column' }}>
        <h2>Liens admin</h2>
        <Link to="/admin/dashboard">Dashboard (admin)</Link>
        <Link to="/admin/settings">Paramètres (admin)</Link>
        <Link to="/admin/money">Argent (admin)</Link>
        <h2>Liens user</h2>
        <Link to="/user/cart">Panier (user)</Link>
      </nav>
      <Switch>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/user">
          <User />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
