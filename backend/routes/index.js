const express = require('express');
const Article = require('../model/article');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  Article.find({})
    .then((articles) => {
      res.render('index', {
        title: 'Express',
        articles
      });
    })
    .catch(err => { next(err); });
});

module.exports = router;