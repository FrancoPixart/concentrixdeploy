import React from 'react'
import ReactDOM from 'react-dom/client'
// import { AuthProvider } from './context/AuthProvider.js'
import App from './main/App.js'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
