
// Doggo.js
import React from 'react';


function Doggo() {
    return (

        <div id="headerTab" className='headerTab'>

            {/* trying to separete the tab header and the button */}

            <div id="menuButton" className='menuBtn'>
                <button class="tablink" onclick="('Menu', this, 'red')" id="defaultOpen">Menu</button>
            </div>

            

            <div id= "tabMenu" className='headerTab'>
                <h1>Menu</h1>
            </div>

            <div id= "tabHireMe" className='headerTab'>
                <h1>Hire Me </h1>
            </div>

           
          
        </div>

       
    );
}

export default Doggo;