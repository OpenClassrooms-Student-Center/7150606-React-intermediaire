import { BrowserRouter as Route, Switch, useRouteMatch } from 'react-router-dom'
import Users from "./component/User"
function Admin() {
    const { path, url } = useRouteMatch() // renvoit le path actuel du composant Home
    console.log("path actuel admin", path)
    return <div>
        <h1>Administrateur</h1>

        <Switch>

            <Route exact path={`${path}/users`}>
                <Users />
            </Route>
        </Switch>



    </div >
}

export default Admin