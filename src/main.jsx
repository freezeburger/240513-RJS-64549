import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import { default as App} from './App.jsx'
import './index.css'

console.log(import.meta.env.VITE_USERS_ENDPOINT)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
