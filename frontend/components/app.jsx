import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route';

import Searchbar from './nav/searchbar';
import NavbarContainer from './nav/navbar_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import SpotIndexContainer from './spot/spot_index_container';
import SpotShowContainer from './spot/spot_show_container';
import SpotFormContainer from './spot/spot_form_container';

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
      <Switch>
        <AuthRoute path='/signup' component={SignupFormContainer} />
        <AuthRoute path='/login' component={LoginFormContainer} />
        <Route path='/bookings' render={()=><h1>Booking index page</h1>} />
        <Route path='/spots/new' component={SpotFormContainer} />
        <Route path='/spots/:spotId' component={SpotShowContainer} />
        <Route exact path='/spots/:spotId/edit' component={SpotFormContainer} />
        <Route path='/spots' component={SpotIndexContainer} />
        <Route path='/' component={SpotIndexContainer} />
      </Switch>
    </section>
    <div className='screen'></div>
  </div>
);

export default App;
