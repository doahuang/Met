import React from 'react';
import { Link } from 'react-router-dom';

const VisitorNav = ({ login }) => {
  const demo = () => login({ username: 'test', password: '123123' });

  return (
    <ul>
      <li className='demo'><Link to='/' onClick={demo}>Demo</Link></li>
      <li className='hide'><Link to='/wizard'>Become a wizard</Link></li>
      <li className='hide'><Link to='/'>Help</Link></li>
      <li><Link to='/signup'>Sign up</Link></li>
      <li><Link to='/login'>Log in</Link></li>
    </ul>
  )
};

export default VisitorNav;
