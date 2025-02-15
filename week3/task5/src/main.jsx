import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import LoginForm from './LoginForm.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <LoginForm />
    <App />
  </StrictMode>,
)
