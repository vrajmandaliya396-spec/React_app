import React from 'react'
import { Link } from 'react-router-dom'

const Hader = () => {

  return (
    <div>
      <nav>
        <h1>VM Studio</h1>
        <div className="text-3xl font-bold text-red-500"> 
        <Link to="/home"> Home </Link>
        <Link to="/about"> ABOUT </Link>
        <Link to="/products"> PRODUCTS </Link>
        </div>
      </nav>
    </div>
  )
}

export default Hader
