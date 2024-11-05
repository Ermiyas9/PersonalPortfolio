import React from "react";
import { Link } from 'react-router-dom'; 
import '../App.css';

function FooterComponents() {
  
    return (

    <div id="footerComponents" className="footerComponents" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '20px', padding: '10px' }}>
      
      {/* Nav Links for footeer */}
      <div style={{ paddingBottom:'50px',paddingLeft:'25px',fontSize: '40px', fontWeight: 'bolder', fontFamily: 'Courier New, monospace', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
        <Link to="/menu" className="tablink link-hover">MENU</Link>
        <Link to="/" className="tablink link-hover">HOME</Link>

        <a
            href="mailto:egulti4128@conestogac.on.ca"
            style={{ textDecoration: 'none',fontWeight: 'bold'}}>
                HIRE ME  
        </a>
      </div>
    </div>
  );
}

export default FooterComponents;