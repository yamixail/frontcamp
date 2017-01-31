import formDirective from '../directives/form';

const moduleName = 'directivesModule';

angular.module(moduleName, [])
  .directive(formDirective.name, formDirective.func);

export default moduleName;