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
    let { id, name, imageUrl, latitude, longitude, landscape,
          location, size , price, description, rating = 5, owner_id } = this.props.spot;
    id = `/spots/${id}/edit`;
    const makeStar = () => '⭑⭑⭑⭑⭑'.slice(0, Math.floor(rating));
    return (
      <div className='spot-show-container'>
        <div className='spot-show-banner'>
          <img src={imageUrl} />
          <div className='box box-1'>
            <Link to={id} className='edit'><button><i className="far fa-edit"></i>
              <p className='hide-text'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Edit</p></button></Link>
            <button><i className="far fa-heart"></i>
              <p className='hide-text'>&nbsp;&nbsp;&nbsp;Save</p></button>
          </div>
          <div className='box box-2'>
            <button>View Photos</button>
          </div>
        </div>
        <div className='spot-show-box'>
          <div className='spot-show-info'>
            <div>
              <p className='landscape'>{landscape.toUpperCase()}</p>
              <h3>{name}</h3>
              <p className='location'>{location}</p>
              <p><i className="fas fa-users"></i>&nbsp;&nbsp;{size} guests</p>
              <div className='description'><p>{description}</p></div>
            </div>
            <br></br>
            <div className='review-container'>
              <div className='review-search-bar'>
                <h4>197 Reviews<span>&nbsp;&nbsp;{makeStar(rating)}</span></h4>
                <div className='search-bar'>
                  <i className="fas fa-search"></i><input placeholder='Search reviews' />
                </div>
              </div>

              <div>Review component here</div>
            </div>
          </div>
          <div className='spot-show-booking'>
            <div className='info'>
              <p><span className='price'>${price}</span> per day</p>
              <p><span className='rating'>{makeStar(rating)}</span> <span>197</span></p>
            </div>

            <div>Booking component here</div>
          </div>
        </div>
      </div>
    );
  }
}
