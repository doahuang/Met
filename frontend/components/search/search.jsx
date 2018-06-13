import React from 'react';

import SpotIndex from '../spot/spot_index';
import SpotMap from '../map/spot_map';

const Search = ({ spots, reviews, fetchSpots, fetchReviews }) => {
  let spotIndexProps = { spots, reviews, fetchSpots, fetchReviews };

  return (
    <div>
      <SpotIndex {...spotIndexProps} />
      <SpotMap />
    </div>
  );
};

export default Search;
