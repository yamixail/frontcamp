import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router';

import appRoutes from './routes';

ReactDOM.render(
  <Router history={browserHistory} routes={appRoutes} />,
  document.getElementById('root'),
);
