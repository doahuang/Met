import React from 'react';

export default class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.input;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.searchLog = [];
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.query.length) {
      return null;
    }

    this.props.fetchSpots({'query': {query: 't'}})
      .then(this.logSearch())
      .then(this.clear());
  }

  handleClick(e) {
    this.state.query = e.currentTarget.innerText;
    return this.handleSubmit(e);
  }

  logSearch() {
    if (this.searchLog.length === 5) {
      this.searchLog.shift();
    }
    this.searchLog.push(this.state);
  }

  clear() {
    this.setState({ query: '' });
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
            onChange={this.update('query')} />
        </form>
        <span onClick={() => this.clear()}>X</span>
        <div className='result-box'>
          <ul>
            <h1>Recent Searches</h1>
            { recentSearches }
          </ul>
        </div>
      </div>
    );
  }
}
