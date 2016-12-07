'use strict';
import './assets/less/main.less';

import ShowMore from './news/ShowMore';

document.addEventListener('DOMContentLoaded', () => {
  const button = new ShowMore(document.getElementById('show-more'));
  
  button.init();
});