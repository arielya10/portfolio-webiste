import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Profile-pic.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ariel Cohen</h1>
        <h5 className="text-light">Computer Science Student</h5>
        <CTA />
        
        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  )
}

export default Header