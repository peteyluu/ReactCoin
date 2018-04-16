import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Loading from './Loading';
import Table from './Table';
import Page from './Page';

import { fetchCurrencies } from '../actions/currencies';

class List extends PureComponent {
  componentDidMount() {
    this.props.fetchCurrencies();
  }

  renderChangePercent = (percent) => {
    if (percent > 0) {
      return <span className="percent-raised">{percent}% &uarr;</span>
    } else if (percent < 0) {
      return <span className="percent-fallen">{percent}% &darr;</span>
    } else {
      return <span>{percent}</span>
    }
  }

  handlePageClick = (direction) => {
    let { page } = this.state;
    page = direction === 'next' ? page + 1: page - 1;
    this.setState({ page });
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

const mapStateToProps = state => state;

export default connect(mapStateToProps, { fetchCurrencies })(List);
