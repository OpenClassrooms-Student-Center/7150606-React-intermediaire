import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'

import Admin from './pages/Admin'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Header from './layouts/Header'
import Error from "./components/Error"
import reportWebVitals from './reportWebVitals'

// IMPORT DU STYLE DE BASE SUR TOUTES LES ROUTES ET CONTENU DES PAGES ET COMPOSANTS
import GlobalStyle from './styles/bases/GlobalStyle'

//ReactDOM v18 ne supporte plus ReactDOM.render, il faut createRoot et root.render
//const root = ReactDOM.createRoot(document.getElementById('root'))
ReactDOM.render(

  < React.StrictMode >
    <Router>
      <GlobalStyle /> {/*style globale appliqué a toutes les routes et a toutes le contenu des pages et composants*/}
      <Header />
      <main>
        <Switch>

          {/*Ajouter la prop exact pour que home s affiche sur ce path exactement et non sur un path contenant "/" , 
         c'est a dire que home ne doit pas s afficher dans le path du composant Survey qui commence par "/"*/}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/survey/:questionNumber">
            <Survey />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/results">
            <Results />
          </Route>
          <Route path="/freelances">
            <Freelances />
          </Route>
          <Route>
            <Error />
          </Route>

        </Switch>
      </main>
    </Router>
  </React.StrictMode >,
  document.getElementById('root')

);

/*const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
