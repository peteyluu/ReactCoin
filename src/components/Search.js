import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { API_ROOT_URL } from '../helpers/config';
import { handleResponse } from '../helpers/helpers';
import Loading from './Loading';
import '../css/search.css';

class Search extends PureComponent {
  state = {
    loading: false,
    query: '',
    results: [],
  };

  handleChange = (event) => {
    const query = event.target.value;
    this.setState({ query });
    if (!query) return;
    this.setState({ loading: true });
    fetch(`${API_ROOT_URL}/autocomplete?searchQuery=${query}`)
      .then(handleResponse)
      .then((data) => {
        this.setState({
          loading: false,
          results: data,
        });
      })
  }

  handleRedirect = (id) => {
    this.setState({
      query: '',
      results: [],
    });
    this.props.history.push(`/currency/${id}`);
  }

  renderResults() {
    const { results, query, loading } = this.state;
    if (!query) return '';
    if (results.length) {
      return (
        <div className="search-result-container">
          {results.map(result => (
            <div
              key={result.id}
              className="search-result"
              onClick={() => this.handleRedirect(result.id)}
            >
              {result.name} ({result.symbol})
            </div>
          ))}
        </div>
      );
    }
    if (!loading) {
      return (
        <div className="search-result-container">
          <div className="search-no-result">
            No results found
          </div>
        </div>
      );
    }
  }

  render() {
    const { loading, query } = this.state;
    return (
      <div className="search">
        <span className="search-icon"></span>
        <input
          className="search-input"
          type="text"
          onChange={this.handleChange}
          placeholder="Currency name"
          value={query}
        />
        {loading &&
          <div className="search-loading">
            <Loading width="12px" height="12px" />
          </div>}

        {this.renderResults()}
      </div>
    );
  }
}

export default withRouter(Search);
