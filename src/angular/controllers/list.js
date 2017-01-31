import app from '../app';
import articleFactory from '../factories/article';

const controllerName = 'ArticlesListController';

app.controller(
  controllerName,
  [
    '$scope',
    articleFactory,
    function ($scope, Article) {
      $scope.articles = [];
      $scope.save = function () {
        $scope.entry = new Article();

        Object.assign($scope.entry, $scope.articleForm);
        console.log($scope.entry);

        Article.save($scope.entry, function() {
          console.log(arguments);
        });
      };

      Article.query({}, function successCb(data) {
        $scope.articles = data;
      });
    }
  ]
);

export default controllerName;
