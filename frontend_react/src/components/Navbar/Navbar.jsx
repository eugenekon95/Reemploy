import React from 'react'
import {images} from '../../constants'

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={images.logo} alt="Logo"/>
      </div>
    </nav>
  )
}

export default Navbar