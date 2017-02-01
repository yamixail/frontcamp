import angular from 'angular';
import 'angular-route';
import 'angular-resource';
import 'angular-messages';

import formDirective from './directives/form';
import minLengthDirective from './directives/minLength';

const app = angular.module('hackerNews', ['ngRoute', 'ngResource', 'ngMessages'])
  .directive(formDirective.name, formDirective.func)
  .directive(minLengthDirective.name, minLengthDirective.func);

export default app;
