import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import LandingPage from './pages/marketPlaceLanding'
import AuthPage from './pages/authPage'
import TandooriDelight from './pages/tandooriDelights'
import CheckoutPage from './pages/checkoutTandoori'
import OrderDetailPage from './pages/tandooriOrderDetailPage'
import Providers from './pages/providers'
import FacePainterEventDetailPage from './pages/facePainterPage'
import DJEventDetailPage from './pages/DjEventPage'
import PhotographerEventDetailPage from './pages/photographerPage'
import VenueShopPage from './pages/venuePage'
import MyDashboard from './pages/myDashboard'
import VenueEventDetailPage from './pages/venueEventDetail'
import FacePainterShopPage from './pages/facePainterShop'

function App() {
  return (
    // <div>
    //   {/* <LandingPage/> */}  
    // </div>
    <Router> 
      <Routes> 
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/authorization" element={<AuthPage/>} />
        <Route path="/myDashboard" element={<MyDashboard/>} />
        <Route path="/checkout" element={<CheckoutPage/>} />
        <Route path="/providers" element={<Providers/>} />
        <Route path="/tandooriOrderDetail" element={<OrderDetailPage/>} />
        <Route path="/listing/tandooriDelights" element={<TandooriDelight/>}/>
        <Route path="/listing/facePainter" element={<FacePainterEventDetailPage/>} />
        <Route path="/listing/facePainterShop" element={<FacePainterShopPage/>} />
        <Route path="/listing/DjEvent" element={<DJEventDetailPage/>} />
        <Route path="/listing/Photographer" element={<PhotographerEventDetailPage/>} />
        <Route path="/listing/venueShop" element={<VenueShopPage/>} />
        <Route path="/listing/venueEventDetail" element={<VenueEventDetailPage/>} />
        
      </Routes>
    </Router>
  )
}

export default App
