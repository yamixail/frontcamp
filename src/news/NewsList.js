import Request from '../utils/Request';
import NewsItem from './NewsItem';

export default class NewsList {
  constructor(options) {
    const defaults = {
      list: [],
      source: 'bbc-news'
    };
    
    this.options = Object.assign({}, options, defaults);
    this.list = this.options.list;
  }

  fetchNews(callback) {
    const url = 'https://newsapi.org/v1/articles';
    const params = {
      source: this.options.source,
      sortBy: 'top',
      apiKey: '1572bab4c54248c483304c26bfa71b8e'
    };
    const queryString = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
    
    return Request.getData(`${url}?${queryString}`)
      .then(callback)
      .catch(console.error);
  }
  
  addNews(news) {
    this.list = this.list.concat(news);
  }

  getNewsListFragment() {
    const fragment = document.createDocumentFragment();

    this.list.forEach(news => {
      fragment.appendChild(new NewsItem(news));
    });

    return fragment;
  }
}