import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Question from './pages/Survey/component/Question'
import Admin from './pages/Admin'
import Header from './layouts/Header'

import './styles/index.css'
import reportWebVitals from './reportWebVitals'



//ReactDOM v18 ne supporte plus ReactDOM.render, il faut createRoot et root.render
//const root = ReactDOM.createRoot(document.getElementById('root'))
ReactDOM.render(

  < React.StrictMode >
    <Router>
      <Header />
      {/*Ajouter la prop exact pour que home s affiche sur ce path exactement et non sur un path contenant "/" , 
c'est a dire que home ne doit pas s afficher dans le path du composant Survey qui commence par "/"*/}
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/survey">
        <Survey />
      </Route>
      <Route path="/survey/:questionNumber">

        <Question />

      </Route>



      <Route path="/admin">
        <Admin />
      </Route>

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
