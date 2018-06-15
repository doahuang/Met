import React from 'react';

import SpotIndex from '../spot/spot_index';
import SpotMap from '../map/spot_map';

const Search = ({ spots, reviews, fetchSpots, fetchReviews, updateBounds }) => {
  let center = { lat: 0, lng: 0 };
  let zoom = 2;

  return (
    <div className='homepage'>
      <h2>Explore Middle-earth</h2>

      <SpotMap spots={spots}
        center={center}
        zoom={zoom}
        updateBounds={updateBounds} />

      <h2>Spots around the world</h2>

      <SpotIndex
        spots={spots} reviews={reviews}
        fetchSpots={fetchSpots} fetchReviews={fetchReviews} />
    </div>
  );
};

export default Search;
