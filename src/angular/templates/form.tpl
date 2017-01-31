<div ng-show="formShow" ng-init="formShow = true">
  <input type="text" ng-model="articleForm.title" name="title" placeholder="title" />
  <br />
  <input type="text" ng-model="articleForm.description" name="description" placeholder="description" />
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
  <button ng-click="formShow = false">Cancel</button>
</div>