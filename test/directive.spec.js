import directive from '../src/angular/directives/minLength';

describe('Minimal length directive', () => {
  let $element;
  let $scope;
  
  beforeAll(() => {
    angular.module('test', [])
      .directive('minLength', directive.func);
  });
  
  beforeEach(angular.mock.module('test'));
  
  beforeEach(inject(function($rootScope, $compile) {
    $element = angular.element(
      '<form name="testForm"><input type="text" name="testField" ng-model="field" min-length="20"></form>'
    );

    $scope = $rootScope.$new();
    $compile($element)($scope);
    $scope.$digest();
  }));

  it('should contain error by default', () => {
    expect($scope.testForm.testField.$error.minLength).toBe(true);
  });
  
  it('should contain error when value length less then in attribute', () => {
    $scope.field = 'short value';
    $scope.$digest();
    expect($scope.testForm.testField.$error.minLength).toBe(true);
  });
  
  it('should not contain error when value length bigger then in attribute', () => {
    $scope.field = 'very long long value.';
    $scope.$digest();
    expect($scope.testForm.testField.$error.minLength).not.toBeDefined();
  });
});