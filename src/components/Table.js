import React from 'react';
import PropTypes from 'prop-types';
import '../css/table.css';

const Table = ({ currencies, renderChangePercent }) => {
  return (
    <div className="table-container">       
      <table className="table">
        <thead className="table-head">
          <tr>
            <th>Cryptocurrency</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>24H Change</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {
            currencies.map((currency) => (
              <tr key={currency.id}>
                <td>
                  <span className="table-rank">{currency.rank}</span>
                  {currency.name}
                </td>
                <td>
                  <span className="table-dollar">$ </span>
                  {currency.price}
                </td>
                <td>
                  <span className="table-dollar">$ </span>
                  {currency.marketCap}
                </td>
                <td>
                  {renderChangePercent(currency.percentChange24h)}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  currencies: PropTypes.array.isRequired,
  renderChangePercent: PropTypes.func.isRequired,
};

export default Table;
