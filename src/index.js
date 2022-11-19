import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import reportWebVitals from './reportWebVitals'
import './styles/index.css'


//recatDom v18 ne supporte plus reactDom.render, il faut createRoot et root.render
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>

      <Route path="/">
        <Home />
      </Route>
      <Route path="/survey">
        <Survey />
      </Route>


    </Router>
  </React.StrictMode>

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
