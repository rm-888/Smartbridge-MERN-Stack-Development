import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import UserCard from './UserCard.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <UserCard data={{name:"Rujula Malhotra", email:"rujula.malhotra@gmail.com"}}/>
    <App />
  </StrictMode>,
)
