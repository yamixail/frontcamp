'use strict';

class HackerNews {
  constructor(containerClass) {
    this.list = [];
    this.container = document.getElementsByClassName(containerClass)[0];

    this.fetchNews(response => {
      this.list.concat(response.articles);
      this.generateNewsList();
    });
  }
  
  fetchNews(callback) {
    const url = new URL('https://newsapi.org/v1/articles');

    url.searchParams.append('source', 'hacker-news');
    url.searchParams.append('sortBy', 'top');
    url.searchParams.append('apiKey', '1572bab4c54248c483304c26bfa71b8e');

    return fetch(url)
      .then(response => response.json())
      .then(callback)
      .catch(console.error);
  }

  generateNews(news) {
    const newsItem = document.createElement('div');
    const title = document.createElement('h3');
    const description = document.createElement('p');
    
    if (news.title) title.textContent = news.title;
    if (news.description) description.textContent = news.description;
    
    newsItem.appendChild(title);
    newsItem.appendChild(description);
    
    return newsItem;
  }

  generateNewsList() {
    const fragment = new DocumentFragment();

    this.list.forEach(news => {
      fragment.appendChild(this.generateNews(news));
    });
    
    this.container.appendChild(fragment);
  }
}

function onDOMReady() {
  new HackerNews('news-list');
}

document.addEventListener("DOMContentLoaded", onDOMReady);