import React from 'react';

import SpotIndex from '../spot/spot_index';
import SpotMap from '../map/spot_map';

const Search = ({ spots, reviews, fetchSpots, fetchReviews, updateBounds }) => {
  return (
    <div className='homepage'>
      <SpotIndex
        spots={spots} reviews={reviews}
        fetchSpots={fetchSpots} fetchReviews={fetchReviews} />

      <SpotMap spots={spots} updateBounds={updateBounds} />
    </div>
  );
};

export default Search;
