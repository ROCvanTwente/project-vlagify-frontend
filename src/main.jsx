import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { LocalizationProvider } from './context/LocalizationContext'
import { AppProvider } from './context/AppContext'
import '../i18n/i18n.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LocalizationProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </LocalizationProvider>
    </BrowserRouter>
  </StrictMode>,
)
