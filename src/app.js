'use strict';
import "./assets/less/main.less";

document.addEventListener('DOMContentLoaded', () => {
  const showMoreButton = document.getElementById('show-more');
  
  const showMore = () => {
    require(['./news/HackerNews.js'], ({ HackerNews }) => {
      const myNews = new HackerNews();
      
      myNews.showList(document.getElementsByClassName('hacker-news-list')[0]);
      showMoreButton.style.display = 'none';
      showMoreButton.removeEventListener('click', showMore);
    });
  };
  
  showMoreButton.addEventListener('click', showMore);
});