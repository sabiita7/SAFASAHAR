import React from 'react'
import Logo from '../images/logo.png'
import {Link } from 'react-router-dom'
import { AiFillFacebook } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className='logo'>
            <img src={Logo} alt="Footer Logo" />
          </Link>
          <p>
            Lets follow 3R Principle.
          </p>
          <div className="footer__socials">
            <a href="https://facebook.com/" target="_blank" rel='noreferrer noopener'><AiFillFacebook/></a>
            <a href="https://twitter.com/" target="_blank" rel='noreferrer noopener'><AiOutlineTwitter/></a>
            <a href="https://instagram.com/" target="_blank" rel='noreferrer noopener'><AiFillInstagram/></a>
          </div>
        </article>
        
          
          {/* PERMALINKS Links to various pages */}
        
      </div>
      <div className="footer__copyright">
        <small>2023 SafaSahar Website &copy; All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer
