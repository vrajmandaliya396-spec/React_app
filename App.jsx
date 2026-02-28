import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { div } from 'three/tsl'
import Home from './home';
import About from './about';



const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path='/about' element={<About />}>About</Route>
      <Route path='/contact' element={<contact/>}>Contact</Route>
      <Route path='/projects' element={<projects/>}>Projects</Route>
    </Routes>
    </div>
  )
}

export default App
