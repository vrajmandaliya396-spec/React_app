import React from 'react'
import { Link } from 'react-router-dom'

const Hader = () => {

  return (
    <div>
      <nav>
        <h1>VM Studio</h1>
        <div className="hader"> 
        <Link className="link" to="/home"> HOME </Link>
        <Link className="link" to="/about"> ABOUT </Link>
        <Link className="link" to="/products"> PRODUCTS </Link>
        </div>
      </nav>
    </div>
  )
}

export default Hader
