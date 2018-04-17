import React, { PureComponent } from 'react';
import { API_ROOT_URL } from '../helpers/config';
import { handleResponse } from '../helpers/helpers';
import Loading from './Loading';
import '../css/search.css';

class Search extends PureComponent {
  state = {
    loading: false,
    query: '',
  };

  handleChange = (event) => {
    const query = event.target.value;
    this.setState({ query });
    if (!query) return;
    this.setState({ loading: true });
    fetch(`${API_ROOT_URL}/autocomplete?searchQuery=${query}`)
      .then(handleResponse)
      .then((data) => {
        console.log(data);
        this.setState({ loading: false });
      })
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="search">
        <span className="search-icon"></span>
        <input
          className="search-input"
          type="text"
          onChange={this.handleChange}
          placeholder="Currency name"
        />
        {loading &&
          <div className="search-loading">
            <Loading width="12px" height="12px" />
          </div>}
      </div>
    );
  }
}

export default Search;
