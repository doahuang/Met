 import React from 'react';

const Searchbar = () => (
  <div className='search-bar'>
    <i className="fas fa-search"></i><input placeholder='Try "Shire"' />
    <div className='search-result'>Search Result</div>
  </div>
);

export default Searchbar;
