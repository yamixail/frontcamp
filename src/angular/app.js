import angular from 'angular';
import 'angular-route';
import 'angular-resource';
import 'angular-messages';

import formDirective from './directives/form';
import minLengthDirective from './directives/minLength';
import articlesListController from './controllers/list';
import articleFactory from './factories/article';

const app = angular.module('hackerNews', ['ngRoute', 'ngResource', 'ngMessages'])
  .directive(formDirective.name, formDirective.func)
  .directive(minLengthDirective.name, minLengthDirective.func)
  .factory(articleFactory.name, articleFactory.func)
  .controller(articlesListController.name, articlesListController.func);

export default app;
