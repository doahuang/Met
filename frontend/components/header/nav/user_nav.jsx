import React from 'react';
import { Link } from 'react-router-dom';

const UserNav = ({ logout }) => (
  <ul>
    <li><Link to='/spots/new'>Add listing</Link></li>
    <li><Link to='/bookings'>Trips</Link></li>
    <li className='hide'><Link to='/'>Messages</Link></li>
    <li className='hide'><Link to='/help'>Help</Link></li>
    <li><Link to='/' onClick={logout}>Log out</Link></li>
  </ul>
);

export default UserNav;
