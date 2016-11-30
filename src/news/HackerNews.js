import './news.less';

import NewsList from './NewsList';

export class HackerNews extends NewsList {
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