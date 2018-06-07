import { connect } from 'react-redux';

import { signup, login, logout } from '../../actions/session';
import Navbar from './navbar';

const msp = ({ session, entities }) => ({
  currentUser: entities.users[session.id]
});

const mdp = dispatch => ({
  login: user => dispatch(login(user)),
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(Navbar);
