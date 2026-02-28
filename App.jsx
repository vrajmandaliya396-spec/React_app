import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Hader from "./Hader"

const App = () => {
        

  return (
    
    <div>
      <Hader />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </div>
  )
}

export default App