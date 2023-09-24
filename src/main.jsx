import React from 'react'
import ReactDOM from 'react-dom/client'
import { WatherApp } from './WatherApp'
import  './styles/weatherStyles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WatherApp />
  </React.StrictMode>,
)
