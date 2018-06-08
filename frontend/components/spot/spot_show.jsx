import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

export default class SpotShow extends React.Component {
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
    if (!this.props.spot) {
      //redirect to home
    }

    let { id, name, imageUrl, latitude, longitude, landscape,
          location, size , price, description, rating = 5, owner_id } = this.props.spot;
    const makeStar = () => '⭑⭑⭑⭑⭑'.slice(0, Math.floor(rating));
    const sizeImage = () => {
      let imageId = imageUrl.slice(-3);
      imageUrl = `https://picsum.photos/1600/1200/?image=${imageId}`;
      return imageUrl;
    };

    return (
      <div className='spot-show-container'>
        <div className='spot-show-banner'>
          <img src={sizeImage()} />
          <h1><Link to={`/spots/${id}/edit`}>Edit</Link></h1>
        </div>
        <div className='spot-show-box'>
          <div className='spot-show-info'>
            <div>
              <p>{landscape}</p>
              <h3>{name}</h3>
              <p>{location}</p>
              <br />
              <p>{size} guests</p>
              <p>{description}</p>
            </div>
            <br />
            <div className='spot-show-review'>
              <h3>Review index page</h3>
              <ul>
                <li>review</li>
                <li>review</li>
                <li>review</li>
                <li>review</li>
              </ul>
            </div>
          </div>
          <div className='spot-show-booking'>
            <div>
              <p><span>${price}</span> per day</p>
              <p><span>{makeStar(rating)}</span> <span>{rating}</span></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
