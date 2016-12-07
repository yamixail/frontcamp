import Executor, { Command } from '../utils/Executor';

export default class ShowMore {
  constructor(element) {
    const command = new Command(
      this.activateButton,
      this.deactivateButton,
      { element, action: this.performAction.bind(this) }
    );
    
    this.commander = new Executor;
    this.commander.register('attachEvent', command);
  }
  
  init() {
    this.commander.execute('attachEvent');
  }
  
  performAction() {
    require(['./HackerNews.js'], ({ HackerNews }) => {
      const myNews = new HackerNews();
      const newsContainer = document.getElementsByClassName('hacker-news-list')[0];
      
      myNews.showList(newsContainer);
      
      this.commander.undo('attachEvent');
    });
  }
  
  activateButton(state) {
    state.element.style.display = '';
    state.element.addEventListener('click', state.action);
    
    return state;
  }
  
  deactivateButton(state) {
    state.element.style.display = 'none';
    state.element.removeEventListener('click', state.action);
    
    return state;
  }
}