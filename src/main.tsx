import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Details from './pages/Details'
import Donation from './pages/Donation'
import Visa from './pages/Visa'
import MasterCard from './pages/MasterCard'
import Paypal from './pages/Paypal';
import Code from './pages/Code'
import PayDone from './pages/PayDone'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='Details' element={<Details />} />
          <Route path='Donation' element={<Donation />} />
          <Route path='Visa' element={<Visa />} />
          <Route path='MasterCard' element={<MasterCard />} />
          <Route path='Paypal' element={<Paypal />} />
          <Route path='Code' element={<Code />} />
          <Route path='PayDone' element={<PayDone />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)