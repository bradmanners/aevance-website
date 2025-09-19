import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const redirectPath = sessionStorage.getItem('spa_redirect_path')
if (redirectPath) {
  sessionStorage.removeItem('spa_redirect_path')
  window.history.replaceState(null, '', redirectPath)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
