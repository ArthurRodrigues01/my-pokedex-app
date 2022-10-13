import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

  return (
    <div className='header-content'>
      <h1 className='title'>Pokedex V1.0</h1>
      <div className='navbar-header'>
        <span className='filler'></span>
        <Link to='/' className='navbar-header-link link-1'>
          <h3 className='navbar-header-link-content'>Home</h3>
        </Link>
        <Link to='/pokedex' className='navbar-header-link link-2'>
          <h3 className='navbar-header-link-content'>Geral</h3>
        </Link>
        <Link to='/pokemon/1' className='navbar-header-link link-3'>
          <h3 className='navbar-header-link-content'>Lista</h3>
        </Link>
      </div>
    </div>
  );
};

export default Header;