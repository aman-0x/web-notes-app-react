import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
  const goTo = () => {
    document.getElementById("aim").scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className='footer'>
        <div className='footer-top'>
          <div className='footer-top-child1'>
          <p><Link className='links' to={"/about"}>About</Link></p>
          </div>
          <div className='footer-top-child2'>
          <p><Link className='links' to={"/notes"}>Notes</Link></p>
          </div>
          <div className='footer-top-child3'>
          <p><Link className='links' to={"/"}>Feature</Link></p>
          </div>
        </div>
        <div className='footer-bottom'>
          <p>Made with <span className='span-color'>&#10084;</span> by Aman</p>
        </div>
    </div>
  )
}

export default Footer;