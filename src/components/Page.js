import React from 'react';
import PropTypes from 'prop-types';
import '../css/page.css';

const Page = ({ page, totalPages, handlePageClick }) => {
  return (
    <div className="page">
      <button
        className="page-button"
        onClick={() => handlePageClick('prev')}
        disabled={page <= 1}
      >
        &larr;
      </button>
      <span className="page-info">
        Page <b>{page}</b> of <b>{totalPages}</b>
      </span>
      <button
        className="page-button"
        onClick={() => handlePageClick('next')}
        disabled={page >= totalPages}
      >
        &rarr;
      </button>
    </div>
  )
};

Page.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handlePageClick: PropTypes.func.isRequired,
};

export default Page;
