const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const Article = new Schema({
  author: String,
  title: { type: String, required: true },
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Article', Article);