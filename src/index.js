import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import List from './components/List';
import './css/index.css';

const App = () => {
  return (
    <div>
      <Header />
      <List />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

