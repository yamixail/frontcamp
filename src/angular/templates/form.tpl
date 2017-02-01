<form name="newArticleForm">
  <input type="text" ng-model="articleForm.title" name="title" placeholder="title" required />
  <span ng-messages="newArticleForm.title.$error" class="errors">
    <span ng-message="required"><br />Title is required</span>
  </span>
  <br />
  <input type="text" ng-model="articleForm.description" name="description" placeholder="description" required min-length="20" />
  <span ng-messages="newArticleForm.description.$error" class="errors">
    <span ng-message="required"><br />Description is required</span>
    <span ng-message="minLength"><br />Description length should be more than 20 charachters</span>
  </span>
  <br />
  <input type="text" ng-model="articleForm.author" name="author" placeholder="author" />
  <br />
  <input type="text" ng-model="articleForm.url" name="url" placeholder="url" />
  <br />
  <input type="text" ng-model="articleForm.urlToImage" name="urlToImage" placeholder="urlToImage" />
  <br />
  <input type="date" ng-model="articleForm.publishedAt" name="publishedAt" placeholder="publishedAt" />
  <br />
  <button ng-click="save()">Save</button>
</form>
