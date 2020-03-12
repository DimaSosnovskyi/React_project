import React from 'react';

const Navbar = () => {
    return (
        <nav className = 'nav'>
        <div class='nav__item'>
          <a href='#'>Profile</a>
        </div>
        <div class='nav__item'>
          <a href='#'>Messeges</a>
        </div>
        <div class='nav__item'>
          <a href='#'>News</a>
        </div>
        <div class='nav__item'>
          <a href='#'>Music</a>
        </div>
        <div class='nav__item active'>
          <a href='#'>Setting</a>
        </div>
      </nav> 
    )
}


export default Navbar;