import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from '@dr.pogodin/react-helmet'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
) 