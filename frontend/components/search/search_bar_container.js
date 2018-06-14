import { connect } from 'react-redux';

import { fetchSpots } from '../../actions/spot';
import Searchbar from './searchbar';

const msp = state => ({
  input: { query: '' }
});

const mdp = dispatch => ({
  fetchSpots: () => dispatch(fetchSpots())
});

export default connect(msp, mdp)(Searchbar);
