import React from 'react';

const Searchbar = () => (
  <div className='search-bar'>
    <img src='https://raw.githubusercontent.com/doahuang/Met/master/app/assets/images/magnifier.png'/>
    <input placeholder='Try "Shire"' />
    <div className='search-result'>Search Result</div>
  </div>
);

export default Searchbar;
