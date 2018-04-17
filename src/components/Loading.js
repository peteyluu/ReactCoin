import React from 'react';
import PropTypes from 'prop-types';
import '../css/loading.css';

const Loading = ({ width, height }) => (
  <div className="loading" style={{ width, height }} />
);

Loading.defaultProps = {
  width: '28px',
  height: '28px',
};

Loading.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Loading;
