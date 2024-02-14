import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import ReactGA from 'react-ga4';
import './index.css'

// ReactGA.initialize("G-6TCDM52R17")
// ReactGA.send({
//   hitType: "pageview",
//   page: window.location.pathname,
// });
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
