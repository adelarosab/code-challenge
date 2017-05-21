import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './components/app/App';
import CardList from './components/card-list/CardList';
import Drawer from './components/drawer/Drawer';

const store = createStore({});
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={CardList} />
        <Route path=":id" component={Drawer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app'),
);
