import articleFactory from '../factories/article';

const $inject = ['$scope', articleFactory.name];

const controller = {
  name: 'ArticlesListController',
  func: function ($scope, Article) {
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
};

controller.func.$inject = $inject;

export default controller;
