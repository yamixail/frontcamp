export default {
  name: 'minLength',
  func: function checkInputMinLength() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, element, attr, ctrl) {
        ctrl.$validators.minLength = function(modelValue) {
          return modelValue && modelValue.length >= parseInt(attr.minLength);
        }
      }
    };
  }
};