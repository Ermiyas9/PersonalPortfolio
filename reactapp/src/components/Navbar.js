import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// importing home icon from font Awesome 
import { faHome } from '@fortawesome/free-solid-svg-icons'; 

import logo from '../images/inkblog1.png';

function Navbar() {

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h1>Welcome to Ermiyas Gulti's Personal Portfolio Website <FontAwesomeIcon icon={faHome} /></h1>
            </div>



           {/* Logo Image */}
           <div className='logo'style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={logo} alt="Logo" />
          </div>

         
        </div>
      </nav>
    </>
  );
}

export default Navbar;
