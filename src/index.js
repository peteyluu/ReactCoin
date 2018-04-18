import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import Header from './components/Header';
import List from './components/List';
import NotFound from './components/NotFound';
import Detail from './components/Detail';
import './css/index.css';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={List} />
            <Route path="/currency/:id" component={Detail} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

render(
  <App />,
  document.getElementById('root')
);
