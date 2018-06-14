import React from 'react';

import SpotIndex from '../spot/spot_index';
// import SpotMap from '../map/spot_map';
// <SpotMap spots={spots} updateBounds={updateBounds} />

const Search = ({ spots, reviews, fetchSpots, fetchReviews, updateBounds }) => {
  return (
    <div className='homepage'>
      <h2>Explore Middle-earth</h2>
      <SpotIndex
        spots={spots} reviews={reviews}
        fetchSpots={fetchSpots} fetchReviews={fetchReviews} />
    </div>
  );
};

export default Search;
