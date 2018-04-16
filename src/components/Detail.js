import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrency } from '../actions/currency';
import '../css/detail.css';

class Detail extends PureComponent {
  componentDidMount() {
    this.props.fetchCurrency(this.props.match.params.id);
  }

  render () {
    return (
      <div>Detail</div>
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
