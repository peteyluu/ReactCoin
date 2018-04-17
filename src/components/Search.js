import React, { PureComponent } from 'react';
import { API_ROOT_URL } from '../helpers/config';
import { handleResponse } from '../helpers/helpers';
import '../css/search.css';

class Search extends PureComponent {
  constructor() {
    super();
    this.state = {
      query: '',
    };
  }

  handleChange = (event) => {
    const query = event.target.value;
    this.setState({ query });
    if (!query) return;
    fetch(`${API_ROOT_URL}/autocomplete?searchQuery=${query}`)
      .then(handleResponse)
      .then(data => console.log(data))
  }

  render() {
    return (
      <div className="search">
        <span className="search-icon"></span>
        <input
          className="search-input"
          type="text"
          onChange={this.handleChange}
          placeholder="Currency name"
        />
      </div>
    );
  }
}

export default Search;
