import React from 'react';
import { Link } from 'react-router-dom';

const UserNav = ({ logout }) => (
  <ul>
    <li><Link to='/spots/new'>List a spot</Link></li>
    <li><Link to='/bookings'>Bookings</Link></li>
    <li className='hide'><Link to='/messages'>Messages</Link></li>
    <li className='hide'><Link to='/'>Help</Link></li>
    <li><Link to='/' onClick={logout}>Log out</Link></li>
  </ul>
);

export default UserNav;
