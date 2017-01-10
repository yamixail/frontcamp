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
const deleteArticle = (req, res) => {
  Article.remove({ _id: req.params.id }, function(err) {
    if (err) return res.status(500).json({err});
    
    res.json({redirect: '/'});
  });
};

router.route('/new')
  .get((req, res, next) => {
    res.render('articles/new', {
      title: 'Create article',
      article: emptyArticle
    });
  })
  .post((req, res, next) => {
    const newArticle = new Article(clearArticleFields(req.body));
    newArticle.save(function (err, article) {
      if (err) return next(err);

      res.json({redirect: '/article/' + article._id});
    });
  });

router.route('/:id')
  .get(function(req, res, next) {
    Article.findById(req.params.id, (err, article) => {
      if (err) return next(err);
      
      res.render('articles/show', { article });
    });
  })
  .delete(deleteArticle);
  
  
router.route('/:id/edit')
  .get((req, res, next) => {
    Article.findById(req.params.id, (err, article) => {
      if (err) return next(err);
      
      res.render('articles/edit', {
        title: 'Edit',
        article
      });
    });
  })
  .put((req, res) => {
    Article.findOneAndUpdate(
      { _id: req.params.id },
      clearArticleFields(req.body),
      (err, article) => {
        if (err) return res.status(500).json({ error });
        
        res.json({redirect: '/article/' + article._id});
      }
    );
  });
  
router.get('/:id/delete', deleteArticle);

module.exports = router;