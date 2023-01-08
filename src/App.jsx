import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./App.css"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cart from './pages/cart/Cart'
import Shop from './pages/shop/Shop'
import Error from './components/Error'
import ShopContextProvider from './context/ShopContext'
const App = () => {
  return (
    <div className="App">
      <ShopContextProvider>
     
      <Router>
      <Navbar />
        <Routes>
          <Route path="/"  element={<Shop/>} />
          <Route path="/cart"  element={<Cart/>} />
          <Route path="/contact"  />
          <Route path="*"  element={<Error/>}/>
        </Routes>
        <Footer />
      </Router>
      </ShopContextProvider>
      
    </div>
  )
}

export default App