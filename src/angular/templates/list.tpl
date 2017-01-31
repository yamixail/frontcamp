<div class="hacker-news-list">
  <h1>Articles</h1>
  <p>Articles count: {{articles.length}}</p>
  <article-form ng-show="true"></article-form>
  <div ng-repeat="article in articles" class="item">
      <h3>{{article.title}}</h3>
      <img ng-src="{{article.urlToImage}}" alt="article.title">
      <p ng-bind="article.description"></p>
      <p>
        <span ng-if="article.publishedAt">{{article.publishedAt | date:'dd/MM/yyyy'}}</span>
        <span>
          <span ng-if="article.author"><b>Author:</b> {{article.author}}</span>
          <a ng-href="/articles/{{article.url}}" target="_blank">Link</a>
        </span>
      </p>
      <p>
        <a ng-href="/articles/{{id}}">Edit</a>
        <br />
        <button>Delete</button>
      </p>
  </div>
</div>