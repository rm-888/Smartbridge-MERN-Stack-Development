import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TextUpdater from './TextUpdater.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TextUpdater />
    <App />
  </StrictMode>,
)
