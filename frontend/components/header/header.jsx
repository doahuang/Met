import React from 'react';
import { Link } from 'react-router-dom';

import SearchbarContainer from '../search/search_bar_container';
import NavbarContainer from './nav/navbar_container';

const Header = () => (
  <header>
    <div className='logo-search-box'>
      <div className='logo'><Link to='/'>Met</Link></div>
      <SearchbarContainer />
    </div>
    <NavbarContainer />
  </header>
);

export default Header;
