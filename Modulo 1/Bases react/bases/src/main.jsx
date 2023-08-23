import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {HelloWorldApp} from './HelloWorldApp.jsx'
import {FirstApp} from './FirstApp.jsx'
import {CounterApp} from './CounterApp.jsx'
import './index.css'
import './css/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <FirstApp name={'Esteban Montoya Maya'} tittle={'Mi primer componente'} age={23} /> */}
    <CounterApp/>
  </React.StrictMode>,
)
