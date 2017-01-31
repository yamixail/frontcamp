const router = require('express').Router();
const Article = require('../model/article');

const emptyArticle = {
  title: '',
  description: '',
  urlToImage: '',
  url: '',
  author: '',
  publishedAt: ''
};
const clearArticleFields = (article) => {
  return Object.keys(emptyArticle)
    .reduce((result, field) => {
      result[field] = article[field];
      
      return result;
    }, {});
};

router.route('/')
  .get((req, res, next) => {
    Article.find({})
      .then((articles) => {
        res.json(articles.map(article => article._doc));
      })
      .catch(err => { next(err); });
  })
  .post((req, res, next) => {
    const newArticle = new Article(clearArticleFields(req.body));
    newArticle.save(function (err, article) {
      if (err) return next(err);

      res.json(article._doc);
    });
  });

router.route('/:id')
  .get(function(req, res, next) {
    Article.findById(req.params.id, (err, article) => {
      if (err) return next(err);
      
      res.json(article);
    });
  })
  .put((req, res) => {
    Article.findOneAndUpdate(
      { _id: req.params.id },
      clearArticleFields(req.body),
      (err, article) => {
        if (err) return res.status(500).json({ err });
        
        res.json({ success: true });
      }
    );
  })
  .delete((req, res) => {
    Article.findOneAndRemove({ _id: req.params.id }, function(err) {
      if (err) return res.status(500).json({err});
      
      res.json({ success: true });
    });
  });

module.exports = router;