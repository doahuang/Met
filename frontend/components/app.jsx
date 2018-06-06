import React from 'react';
import { Route, Link } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../utils/route';

const App = () => (
  <div>
    <header>
      <div>
        <div className='logo'><Link to='/'>Met</Link></div>
        <div className='search-bar'>
          <img src='../assets/magnifier.png'/><input placeholder='Try "Shire"' />
        </div>
      </div>
      <nav><GreetingContainer /></nav>
    </header>
    <main>
      <div className='bg'>
        <h2>Explore Middle-earth</h2>
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
      </div>
    </main>
    <div className='screen'></div>
  </div>
);

export default App;
