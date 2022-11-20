import React from 'react'
import { BrowserRouter as Route, Switch, Link, useRouteMatch } from 'react-router-dom'
import Users from "./component/User"
function Admin() {
    const { path } = useRouteMatch() // renvoit le path actuel du composant Home
    console.log("path actuel admin", path)
    return <React.Fragment>
        <main>
            <h1>Administrateur</h1>
            <ul>
                <li><Link to={`${path}/users`}>Utilisateurs</Link></li>

            </ul>
            <Switch>

                <Route exact path={`${path}/users`}>
                    <Users />
                </Route>
            </Switch>


        </main>
    </React.Fragment >
}

export default Admin