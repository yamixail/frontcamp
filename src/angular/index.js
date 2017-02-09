import '../assets/less/main.less';
import app from './app';
import articlesListController from './controllers/list';
import listTemplate from './templates/list.tpl';

app.config(
  [
    '$locationProvider',
    '$routeProvider',
    function ($locationProvider, $routeProvider) {
      $locationProvider.html5Mode(true);

      $routeProvider
        .when('/', {
          template: listTemplate,
          controller: articlesListController.name,
        })
        .otherwise({
          redirectTo: '/',
        });
    }
  ]
);
