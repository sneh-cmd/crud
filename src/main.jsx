import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import DeleteData from '../Delete.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Router>
    <Routes>
    <Route path='/' element={<App />}></Route>
    <Route path='/:id' element={<DeleteData />}></Route>
   
    </Routes>
   
   
   </Router>
  </StrictMode>,
)
