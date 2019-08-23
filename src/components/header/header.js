import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

import logo from '../../img/logo.png';

const Header = () => {
  return (
    <header className="header">
      <h1>DriveClass</h1>
      <div className='header-logo'>
        {/* <Link to="/#"><img src={logo} alt='logo'></img></Link> */}
      </div>
    </header>
  );
};



export default Header;
