import React from 'react';
import { Route, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route';

import Searchbar from './nav/searchbar';
import NavbarContainer from './nav/navbar_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import SpotIndexContainer from './spot/spot_index_container';
import SpotShowContainer from './spot/spot_show_container';

const App = () => (
  <div>
    <header>
      <div>
        <div className='logo'><Link to='/'>Met</Link></div>
        <Searchbar />
      </div>
      <nav><NavbarContainer /></nav>
    </header>
    <section>
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <Route path="/bookings" render={()=><h1>Booking index page</h1>} />
      <Route path={`/spots/:spotId`} component={SpotShowContainer} />
      <Route exact path="/spots" component={SpotIndexContainer} />
      <Route exact path="/" component={SpotIndexContainer} />
    </section>
    <div className='screen'></div>
  </div>
);

export default App;
