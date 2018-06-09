import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../utils/route';
import Header from './header/header';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import SpotIndexContainer from './spot/spot_index_container';
import SpotShowContainer from './spot/spot_show_container';
import CreateSpotFormContainer from './spot/create_spot_form_container';
import EditSpotFormContainer from './spot/edit_spot_form_container';
import NotFound from './not_found';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path='/' component={SpotIndexContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />
      <AuthRoute path='/login' component={LoginFormContainer} />
      <ProtectedRoute path='/bookings' render={()=><h1>Booking index page</h1>} />
      <ProtectedRoute path='/spots/new' component={CreateSpotFormContainer} />
      <ProtectedRoute path='/spots/:spotId/edit' component={EditSpotFormContainer} />
      <Route path='/spots/:spotId' component={SpotShowContainer} />
      <Redirect from='/spots' to='/' />
      <Route to='/404' render={NotFound} />
    </Switch>
    <div className='screen'></div>
  </div>
);

export default App;
