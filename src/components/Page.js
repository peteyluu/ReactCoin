import React from 'react';
import page from '../css/page.css';

const Page = ({ page, totalPages }) => {
  return (
    <div className="page">
      <button className="page-button">&larr;</button>
      <span className="page-info">
        page <b>{page}</b> of <b>{totalPages}</b>
      </span>
      <button className="page-button">&rarr;</button>
    </div>
  )
};

export default Page;
