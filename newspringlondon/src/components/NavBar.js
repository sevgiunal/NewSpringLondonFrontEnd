import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';
import SecondaryLogo from "/Users/sevgiunal/Desktop/NewSpringLondonLTD/NewSpringLondonFrontEnd/newspringlondon/src/assets/SecondaryLogo.png";

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click); 
  const closeMobileMenu = () => setClick(false);
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to ='/' className="navbar-logo">
                    <img src={SecondaryLogo} alt="NewSpringLondon" className="navbar-logo-img" />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to= '/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to= '/buildhouses' className='nav-links' onClick={closeMobileMenu}>
                            Sell Land
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to= '/getaquote' className='nav-links' onClick={closeMobileMenu}>
                            Renovate
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to= '/products' className='nav-links' onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to= '/aboutus' className='nav-links' onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
    </>

  )
}

export default NavBar
