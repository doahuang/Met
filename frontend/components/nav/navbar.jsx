import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, login, logout }) => {
  const demo = () => login({ username: 'test', password: '123123' });
  const visitorIndex = () => (
    <ul>
      <li className='group demo'><Link to='/spots' onClick={() => demo() }>Demo</Link></li>
      <li><Link to='/'>Become a host</Link></li>
      <li><Link to='/'>Help</Link></li>
      <li className='group'><Link to='/signup'>Sign up</Link></li>
      <li className='group'><Link to='/login'>Log in</Link></li>
    </ul>
  );
  const userIndex = () => (
    <ul>
      <li className='group'><Link to='/spots/new'>Become a host</Link></li>
      <li className='group'><Link to='/bookings'>Bookings</Link></li>
      <li><Link to='/'>Messages</Link></li>
      <li><Link to='/'>Help</Link></li>
      <li className='group'><Link to='/' onClick={ logout }>Log out</Link></li>
    </ul>
  );
  return currentUser ? userIndex() : visitorIndex();
}

export default Navbar;
