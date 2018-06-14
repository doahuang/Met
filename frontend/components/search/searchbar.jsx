 import React from 'react';

export default class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { keyword: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submit');
  }

  clear() {
    this.setState({ keyword: '' });
  }

  render() {
    return (
      <div className='search-bar'>
        <i className="fas fa-search"></i>
        <form onSubmit={this.handleSubmit}>
          <input placeholder='Try "Shire"' value={this.state.keyword}
            onChange={this.update('keyword')} />
        </form>
        <span onClick={() => this.clear()}>X</span>
        <div className='result-box'>
          <ul>
            <h1>Recent Searches</h1>
            <li>something</li>
            <li>something</li>
            <li>something</li>
            <li>something</li>
          </ul>
        </div>
      </div>
    );
  }
}
