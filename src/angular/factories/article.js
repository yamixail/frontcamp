import app from '../app.js';

const factoryName = 'Article';

app.factory(
    factoryName,
    [
      '$resource',
      function ($resource) {
        return $resource(
          'http://localhost:3000/api/articles/:articleId',
          {},
          { udpate: { method: 'PUT', params: { articleId: '@_id' } }, isArray: false },
        );
      }
    ]
);
  
export default factoryName;
