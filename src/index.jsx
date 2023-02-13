import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Header from './components/Header'
import Error from './components/Error'
import { createGlobalStyle } from 'styled-components'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/survey/:questionNumber",
    element:<Survey />,
  },
  {
    path: "/results",
    element:<Results />,
  },
  {
    path: "/freelances",
    element:<Freelances />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
      <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
)
