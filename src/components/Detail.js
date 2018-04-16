import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchCurrency } from '../actions/currency';
import Loading from './Loading';
import '../css/detail.css';

class Detail extends PureComponent {
  componentDidMount() {
    this.props.fetchCurrency(this.props.match.params.id);
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

  render () {
    const { loading, error, currency, history } = this.props;
    if (loading) return <div className="loading-container"><Loading /></div>
    if (error) return <div className="error">{error}</div>
    return (
      <div className="detail">
        <button
          className="page-button"
          onClick={() => history.goBack()}
        >
        &larr;
      </button>
        <h1 className="detail-heading">
          {currency.name} ({currency.symbol})
        </h1>
        <div className="detail-container">
          <div className="detail-item">
            Price 
            <span className="detail-value">
              <span className="detail-dollar">$</span>
              {currency.price}
            </span>
          </div>
          <div className="detail-item">
            Rank <span className="detail-value">{currency.rank}</span>
          </div>
          <div className="detail-item">
            24H Change <span className="detail-value">{this.renderChangePercent(currency.percentChange24h)}</span>
          </div>
          <div className="detail-item">
            <span className="detail-title">Market Cap</span>
            <span className="detail-dollar">$</span>
            {currency.marketCap}
          </div>
          <div className="detail-item">
            <span className="detail-title">24H Volume</span>
            <span className="detail-dollar">$</span>
            {currency.volume24h}
          </div>
          <div className="detail-item">
            <span className="detail-title">Total Supply</span>
            <span className="detail-dollar">$</span>
            {currency.totalSupply}
          </div>
        </div>
      </div>
    );
  }
}

Detail.propTypes = {
  loading: PropTypes.bool.isRequired,
  currency: PropTypes.object.isRequired,
  error: PropTypes.object,
  fetchCurrency: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.currency;

export default connect(
  mapStateToProps,
  { fetchCurrency },
)(Detail);
