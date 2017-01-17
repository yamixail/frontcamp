import React, { Component } from 'react';

import ArticleItem from '../Articles/Item';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  
  componentWillMount() {
    fetch('http://localhost:3000/api/articles/list')
      .then(response => response.json())
      .then(({ articles }) => this.setState({ list: articles }))
      .catch(console.error);
  }
  
  render() {
    return (
      <div>
        <div className="hacker-news-list">
          <h1>Articles</h1>
          {this.state.list.map(
            (article) => (
              <ArticleItem
                key={article._id}
                data={article}
                deleteCallback={(deleteId) => 
                  this.setState({list: this.state.list.filter(
                    (article) => article._id !== deleteId
                  )})
                }
              />
            )
          )}
        </div>
      </div>
    )
  }
};