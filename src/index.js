import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import List from './components/List';
import './css/index.css';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <List />
      </div>
    </Provider>
  );
};

render(
  <App />,
  document.getElementById('root')
);
