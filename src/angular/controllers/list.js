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
      $scope.showNewArticleForm = false;
      $scope.toggleNewArticleForm = () => {
        $scope.showNewArticleForm = !$scope.showNewArticleForm;
      }
      $scope.save = function () {
        $scope.entry = new Article();

        Object.assign($scope.entry, $scope.articleForm);

        Article.save($scope.entry, function(article) {
          $scope.showNewArticleForm = false;
          $scope.articles.unshift(article);
        });
      };

      Article.query({}, function successCb(data) {
        $scope.articles = data;
      });
    }
  ]
);

export default controllerName;
