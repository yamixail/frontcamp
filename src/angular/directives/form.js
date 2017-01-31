import formTemplate from '../templates/form.tpl';

export default {
  name: 'articleForm',
  func: function formDirective() {
    return {
      restrict: 'E',
      template: formTemplate
    };
  }
};
