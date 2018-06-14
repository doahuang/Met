import React from 'react';

export default class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.input;

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.searchLog = [];
  }

  handleSearch(e) {
    this.setState({query: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.query.length) {
      return null;
    }

    this.props.fetchSpots(this.state);
    this.logSearch();
    this.setState({query: ''});
  }

  handleClick(e) {
    if (this.state.query !== e.currentTarget.innerText) {
      this.state.query = e.currentTarget.innerText;
      return this.props.fetchSpots(this.state);
    }
  }

  logSearch() {
    if (this.searchLog.length === 3) {
      this.searchLog.shift();
    }
    return this.searchLog.push(this.state);
  }

  clear() {
    this.state.query = '';
    this.props.fetchSpots(this.state);
  }

  render() {
    let recentSearches = this.searchLog.map((search, i) => (
      <li key={i} onClick={this.handleClick}>{ search.query }</li>
    ));

    return (
      <div className='search-bar'>
        <i className="fas fa-search"></i>
        <form onSubmit={this.handleSubmit}>
          <input placeholder='Try "Shire"' value={this.state.query}
            onChange={this.handleSearch} />
        </form>
        <div className='result-box'>
          <ul>
            <div>
              <h1>Recent Searches</h1>
              <p onClick={() => this.clear()}>Clear</p>
            </div>
            { recentSearches }
          </ul>
        </div>
      </div>
    );
  }
}
