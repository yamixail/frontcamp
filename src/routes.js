import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './components/Home';
import NewItem from './components/Articles/NewItem';
import EditItem from './components/Articles/EditItem';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="articles">
      <IndexRoute component={Home} />
      <Route path="new" component={NewItem} />
      <Route path=":id/edit" component={EditItem}></Route>
    </Route>
  </Route>
);
