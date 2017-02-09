import 'angular-resource';
import controller from '../src/angular/controllers/list';
import articleFactory from '../src/angular/factories/article';

describe('Articles list component', () => {
  let $controller;
  let $rootScope;
  
  
  beforeAll(() => {
    angular.module('test', ['ngResource'])
      .factory(articleFactory.name, articleFactory.func)
      .controller(controller.name, controller.func);
  });
  beforeEach(angular.mock.module('test'));
  
  
  beforeEach(inject(function(_$controller_, _$rootScope_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
  }));
  
  
  it('should contain empty articles list', function() {
    const $scope = $rootScope.$new();
    $controller(controller.name, { $scope });
    expect($scope.articles).toBeDefined();
    expect($scope.articles.length).toBe(0);
  });

  it('should have switched off flag showNewArticleForm', function() {
      const $scope = $rootScope.$new();
      $controller(controller.name, { $scope });
      expect($scope.showNewArticleForm).toBe(false);
  });
});