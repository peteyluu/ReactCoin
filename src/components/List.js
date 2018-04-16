import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loading from './Loading';
import Table from './Table';
import Page from './Page';
import { fetchCurrencies, togglePage } from '../actions/currencies';

class List extends PureComponent {
  componentDidMount() {
    this.props.fetchCurrencies();
  }

  renderChangePercent = (percent) => {
    if (percent > 0) {
      return <span className="percent-raised">&uarr; {percent}%</span>
    } else if (percent < 0) {
      return <span className="percent-fallen">&darr; {percent}%</span>
    } else {
      return <span>{percent}</span>
    }
  }

  handlePageClick = (direction) => {
    let { page, togglePage, fetchCurrencies } = this.props;
    page = direction === 'next' ? page + 1: page - 1;
    togglePage(page, () => {
      fetchCurrencies();
    });
  }

  render() {
    const { loading, error, currencies, page, totalPages } = this.props;
    if (loading) {
      return <div className="loading-container"><Loading /></div>
    }
    if (error) {
      return <div className="error">{error}</div>
    }
    return (
      <div>
        <Table
          currencies={currencies}
          renderChangePercent={this.renderChangePercent}
        />
        <Page
          page={page}
          totalPages={totalPages}
          handlePageClick={this.handlePageClick}
        />
      </div>
    );
  }
}

List.propTypes = {
  currencies: PropTypes.array.isRequired,
  error: PropTypes.object,
  page: PropTypes.number.isRequired,
  totalCurrencies: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
  togglePage: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.currencies;

export default connect(
  mapStateToProps,
  { fetchCurrencies, togglePage },
)(List);
