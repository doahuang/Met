import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, signup, login, logout }) => {
  const visitorIndex = () => (
    <ul>
      <li><Link to='/'>Become a host</Link></li>
      <li><Link to='/'>Help</Link></li>
      <li className='group'><Link to='/signup'>Sign up</Link></li>
      <li className='group'><Link to='/login'>Log in</Link></li>
    </ul>
  );
  const userIndex = () => (
    <ul>
      <li><Link to='/'>Saved</Link></li>
      <li className='group'><Link to='/bookings'>Bookings</Link></li>
      <li className='group'><Link to='/'>Messages</Link></li>
      <li><Link to='/'>Help</Link></li>
      <li><Link to='/'>Credit</Link></li>
      <li className='group'><Link to='/' onClick={ logout }>Log out</Link></li>
    </ul>
  );
  return currentUser ? userIndex() : visitorIndex();
}

export default Greeting;
