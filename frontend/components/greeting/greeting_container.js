import { connect } from 'react-redux';

import { signup, login, logout } from '../../actions/session';
import Greeting from './greeting';

const msp = ({ session, entities }) => ({
  currentUser: entities.users[session.id]
});

const mdp = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(Greeting);
