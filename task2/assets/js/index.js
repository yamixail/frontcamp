'use strict';

class NewsItem {
  constructor(news) {
    const newsItem = document.createElement('div');
    newsItem.classList.add('item');

    if (news.title) {
      newsItem.appendChild(
        this._createElement('h3', { textContent: news.title })
      );
    }
    
    if (news.urlToImage) {
      newsItem.appendChild(
        this._createElement('img', { src: news.urlToImage })
      );
    }

    if (news.description) {
      newsItem.appendChild(
        this._createElement('p', { textContent: news.description })
      );
    }
    
    if (news.publishedAt || news.author || news.url) {
      const newsBottom = this._createElement('p');
      if (news.publishedAt) {
        const d = new Date(news.publishedAt);
        newsBottom.appendChild(
          this._createElement(
            'span',
            { textContent: `${d.getMonth()}/${d.getDate()}/${d.getFullYear()}` }
          )
        );
      }

      if (news.author) {
        newsBottom.appendChild(
          this._createElement('span', { innerHTML: `<b>Author:</b> ${news.author}` })
        );
      }
      
      if (news.url) {
        newsBottom.appendChild(
          this._createElement('a', {
            href: news.url,
            target: '_blank',
            textContent: 'Link'
          })
        );
      }
      
      newsItem.appendChild(newsBottom);
    }

    return newsItem;
  }
  
  _createElement(tagName, attrs = {}) {
    return Object.assign(document.createElement(tagName), attrs);
  }
}

class NewsList {
  constructor(options) {
    const defaults = {
      list: [],
      source: 'bbc-news'
    };
    
    this.options = Object.assign({}, options, defaults);
    this.list = this.options.list;
  }

  fetchNews(callback) {
    const url = new URL('https://newsapi.org/v1/articles');

    url.searchParams.append('source', this.options.source);
    url.searchParams.append('sortBy', 'top');
    url.searchParams.append('apiKey', '1572bab4c54248c483304c26bfa71b8e');

    return fetch(url)
      .then(response => response.json())
      .then(callback)
      .catch(console.log);
  }
  
  addNews(news) {
    this.list = this.list.concat(news);
  }

  getNewsListFragment() {
    const fragment = new DocumentFragment();

    this.list.forEach(news => {
      fragment.appendChild(new NewsItem(news));
    });

    return fragment;
  }
}

class HackerNews extends NewsList {
  constructor(containerClass) {
    super({ source: 'hacker-news' });
  }

  showList(container) {
    this.fetchNews(response => {
      this.addNews(response.articles);
      container.appendChild(this.getNewsListFragment());
    });
  }
}

const myNews = new HackerNews();

myNews.showList(document.getElementsByClassName('hacker-news-list')[0]);