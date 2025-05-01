import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import LandingPage from './pages/marketPlaceLanding'
import AuthPage from './pages/authPage'
import TandooriDelight from './pages/tandooriDelights'
import CheckoutPage from './pages/checkoutTandoori'
import OrderDetailPage from './pages/tandooriOrderDetailPage'
import Providers from './pages/providers'

function App() {
  return (
    // <div>
    //   {/* <LandingPage/> */}  
    // </div>
    <Router> 
      <Routes> 
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/authorization" element={<AuthPage/>} />
        <Route path="/listing/tandooriDelights" element={<TandooriDelight/>}/>
        <Route path="/tandooriOrderDetail" element={<OrderDetailPage/>} />
        <Route path="/checkout" element={<CheckoutPage/>} />
        <Route path="/providers" element={<Providers/>} />
        
      </Routes>
    </Router>
  )
}

export default App
