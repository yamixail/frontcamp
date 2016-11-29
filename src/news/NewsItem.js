export default class NewsItem {
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