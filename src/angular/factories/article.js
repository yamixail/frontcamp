const $inject = ['$resource'];
const factory = {
  name: 'Article',
  func: ($resource) => $resource(
    'http://localhost:3000/api/articles/:articleId',
    {},
    { udpate: { method: 'PUT', params: { articleId: '@_id' } }, isArray: false },
  )
};

factory.func.$inject = $inject;
  
export default factory;
