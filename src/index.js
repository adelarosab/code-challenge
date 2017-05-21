import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { routerReducer, syncHistoryWithStore } from 'react-router-redux';

import App from './components/app/App';
import CardList from './components/card-list/CardList';
import Drawer from './components/drawer/Drawer';

const reducer = combineReducers({
  routing: routerReducer,
});

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
