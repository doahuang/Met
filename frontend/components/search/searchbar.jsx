 import React from 'react';

export default class Searchbar extends React.Component {

  render() {
    return (
      <div className='search-bar'>
        <i className="fas fa-search"></i>
        <input placeholder='Try "Shire"' />
      </div>
    );
  }
}
