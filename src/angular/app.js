import angular from 'angular';
import 'angular-route';
import 'angular-resource';

import directiveModule from './modules/directives';

const app = angular.module(
  'hackerNews',
  [
    'ngRoute',
    'ngResource',
    directiveModule
  ]
);

export default app;
