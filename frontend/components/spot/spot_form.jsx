import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

import SpotMap from '../map/spot_map';
import RenderErrors from '../errors';

class SpotForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.spot;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    if (this.props.errors.length) {
      this.props.clear();
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    let id = this.state.id;
    if (!this.state.imageUrl) { // http://www.totalwar.thilisar.cz/taimg/map.png
      this.state.imageUrl = 'https://orig00.deviantart.net/36a7/f/2012/054/5/0/middle_earth_map_wallpaper_2_by_johnnyslowhand-d4qorml.jpg';
    }
    let url = id ? `/spots/${id}` : '/';
    this.props.submit(this.state).then(() => this.props.history.push(url));
  }

  render() {
    if (!this.state) {
      return <Redirect to='/404' />;
    }

    let { name, imageUrl, landscape, size, price, description } = this.state;
    let { spot, updateBounds, errors } = this.props;
    let latlng;
    if (spot.latitude) {
      latlng = new google.maps.LatLng(spot.latitude, spot.longitude);
    }
    debugger

    return (
      <div className='spot-listing-container'>
        <div className='spot-map-container'>
          <div className='spot-map'>

            <SpotMap spots={[spot]}
              updateBounds={updateBounds}
              center={latlng}/>

            <div className='button-box'>
              <button onClick={() => this.props.history.goBack()}>Back</button>
              <button onClick={this.handleSubmit}>Looks good</button>
            </div>
            <div className='errors'> <RenderErrors errors={errors} /> </div>
          </div>
        </div>
        <div className='spot-form-box'>
          <h2>{this.props.formType}</h2>
          <form>
            <div>
              <label htmlFor='name'>Name</label>
              <input id='name' onChange={this.update('name')} value={name} />
              <label htmlFor='image'>Image</label>
              <input id='image' onChange={this.update('imageUrl')} value={imageUrl} placeholder='URL here' />
              <label htmlFor='landscape'>Landscape</label>
              <input id='landscape' onChange={this.update('landscape')} value={landscape} />
              <div className='number-box'>
                <div>
                  <label htmlFor='size'>Size</label>
                  <input id='size' type='number' onChange={this.update('size')} value={size} />
                </div>
                <div>
                  <label htmlFor='price'>Price</label>
                  <input id='price' type='number' onChange={this.update('price')} value={price} />
                </div>
              </div>
              <label htmlFor='description'>Description</label>
              <textarea id='description' onChange={this.update('description')} defaultValue={description} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SpotForm);
