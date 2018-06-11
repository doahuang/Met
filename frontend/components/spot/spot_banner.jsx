import React from 'react';

const SpotBanner = ({ imageUrl }) => {
  return (
    <div className='spot-show-banner'>
      <img src={imageUrl} />
      <div className='box box-1'>
        <button>
          <i className="far fa-share-square"></i>
          <span className='hide'> Share</span>
        </button>
        <button>
          <i className="far fa-heart"></i>
          <span className='hide'> Save</span>
        </button>
      </div>
      <div className='box box-2'>
        <button>View Photos</button>
      </div>
    </div>
  );
}

export default SpotBanner;
