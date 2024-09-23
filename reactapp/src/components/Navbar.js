import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import FormatListBulletedSharpIcon from '@mui/icons-material/FormatListBulletedSharp';
import logo from '../images/inkblog1.png';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  }

  const closeMobileMenu = () => {
    setClick(false);
  }

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/About' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Projects' className='nav-links' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Contacts' className='nav-links' onClick={closeMobileMenu}>
                Contacts
              </Link>
            </li>
          </ul>

          {/* Logo Image */}
          <div className='logo' style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
            <img src={logo} alt="Logo" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
