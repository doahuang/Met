import React from 'react';
import { Link } from 'react-router-dom';

import VisitorNav from './visitor_nav';
import UserNav from './user_nav';

const Navbar = ({ currentUser, login, logout }) => (
  <nav>
    { currentUser ? <UserNav logout={logout} /> : <VisitorNav login={login} /> }
  </nav>
);

export default Navbar;
