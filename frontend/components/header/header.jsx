import React from 'react';
import { Link } from 'react-router-dom';

import Searchbar from '../search/searchbar';
import NavbarContainer from './nav/navbar_container';

const Header = () => (
  <header>
    <div className='logo-search-box'>
      <div className='logo'><Link to='/'>Met</Link></div>
      <Searchbar />
    </div>
    <NavbarContainer />
  </header>
);

export default Header;
