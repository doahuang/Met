import React from 'react';
import { connect } from 'react-redux';
import { fetchSpot, updateSpot } from '../../actions/spot';
import SpotForm from './spot_form';

const _newSpot =
  { name: '', imageUrl: '', landscape: '', size: '', price: '', description: '' };

const msp = ({ entities }, ownProps) => ({
  spot: entities.spots[ownProps.match.params.spotId] || _newSpot,
  formType: 'Let\'s get started updating your spot.'
});

const mdp = dispatch => ({
  submit: spot => dispatch(updateSpot(spot)),
  fetchSpot: id => dispatch(fetchSpot(id))
});

class EditSpotForm extends React.Component {
  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
  }

  componentWillReceiveProps(nextProps) {
    let id = nextProps.match.params.spotId;
    if (this.props.spot.id != id) {
      this.props.fetchSpot(id);
    }
  }

  render() {
    let { submit, formType, spot } = this.props;
    return (
      <SpotForm submit={submit} formType={formType} spot={spot} />
    );
  }
}

export default connect(msp, mdp)(EditSpotForm);
