import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import SecondaryLogoFlip from "./assets/SecondaryLogoFlip.png";


function Footer() {
  return (
    <div className='footer-container'>

        <div className='footer-links'>
            <div className="footerlogo">
                    <Link to='/' className="social-logo">
                        <img src={SecondaryLogoFlip} alt="NewSpringLondon" className="footer-logo-img" />

                    </Link>

                </div>

                <div className="allrights">

            <p> © 2025 New Spring London Ltd. All rights reserved. | Company Registration: 16510671 </p>
            </div>

            <div className="footer-link-wrapper"> 
            <div className="footer-link-items">
                <h2>Contact Info</h2>
                <p>info@newspringlondon.com</p>
                <div className="social-media-wrap">
                <div className="social-icons">
                <Link to='/' target = '_blank' aria-label = 'Facebook' className="social-icon-link" >
                    <i className="fab fa-facebook-f" />

                </Link>
                <Link to='/' target = '_blank' aria-label = 'Linkedin' className="social-icon-link" >
                    <i className="fab fa-linkedin" />

                </Link>
                <Link to='/' target = '_blank' aria-label = 'Instagram' className="social-icon-link" >
                    <i className="fab fa-instagram" />

                </Link>
                </div>
            </div>

            </div>
            </div>
        </div>
        

    </div>
  )
}

export default Footer
