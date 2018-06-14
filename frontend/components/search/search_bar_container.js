import { connect } from 'react-redux';

import { fetchSpots } from '../../actions/spot';
import Searchbar from './searchbar';

const msp = state => ({
  input: { query: '' }
});

const mdp = dispatch => ({
  fetchSpots: data => dispatch(fetchSpots(data))
});

export default connect(msp, mdp)(Searchbar);
