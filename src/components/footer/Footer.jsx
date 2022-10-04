import React from 'react'
import './footer.css'
import {RiInstagramFill} from 'react-icons/ri'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="#" class='footer__logo'></a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/ariel-cohen-802251211" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/arielya10" target="_blank"><BsGithub /></a>
        <a href="https://www.instagram.com/ariel_cohen_99/"><RiInstagramFill/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All right reserved 2023</small>
      </div>
    </footer>
  )
}

export default Footer