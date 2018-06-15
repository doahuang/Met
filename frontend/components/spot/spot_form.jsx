import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

import SpotMap from '../map/spot_map';
import { updateBounds } from '../../actions/filter';
import Errors from '../shared/errors';

class SpotForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.spot;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  componentWillUnmount() {
    if (this.props.errors.length) {
      this.props.clear();
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  goBack() {
    this.props.history.goBack();
  }

  handleSubmit(e) {
    e.preventDefault();

    let id = this.state.id;
    let url = id ? `/spots/${id}` : '/';

    this.props.submit(this.state)
      .then(() => this.props.history.push(url));
  }

  render() {
    if (!this.state) {
      return <Redirect to='/404' />;
    }

    let { name, imageUrl, location, landscape,
          size, price, description } = this.state;
    let { spot, updateBounds, errors } = this.props;
    let center = new google.maps.LatLng(spot.latitude, spot.longitude);
    let zoom = 2;

    return (
      <div className='spot-listing-container'>
        <div className='spot-form-box'>
          <h2>{this.props.hello}</h2>
          <form>
            <div>
              <label htmlFor='name'>Name</label>
              <input id='name' onChange={this.update('name')} value={name} />

              <label htmlFor='image'>Image</label>
              <input id='image' onChange={this.update('imageUrl')}
                value={imageUrl} placeholder='URL here' />

              <label htmlFor='location'>Location</label>
              <input id='location' onChange={this.update('location')}
                value={location} />

              <label htmlFor='landscape'>Landscape</label>
              <input id='landscape' onChange={this.update('landscape')}
                value={landscape} />

              <div className='number-box'>
                <div>
                  <label htmlFor='size'>Size</label>
                  <input id='size' type='number' min='1'
                    onChange={this.update('size')} value={size} />
                </div>
                <div>
                  <label htmlFor='price'>Price</label>
                  <input id='price' type='number' min='0'
                    onChange={this.update('price')} value={price} />
                </div>
              </div>

              <label htmlFor='description'>Description</label>
              <textarea id='description' onChange={this.update('description')}
                defaultValue={description} />
            </div>
          </form>
        </div>

        <div className='spot-map-container'>
          <div className='spot-map'>

            <SpotMap spots={[spot]}
              updateBounds={updateBounds}
              center={center}
              zoom={zoom}
              gestureHandling='none'
              draggable={true} />

            <div className='tip'>
              * You can drag the pin to adjust its location
            </div>

            <div className='button-box'>
              <button onClick={this.goBack}>Back</button>
              <button onClick={this.handleSubmit}>Looks good</button>
            </div>

            <Errors errors={errors} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SpotForm);
