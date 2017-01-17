import React, { Component } from 'react';
import { Link } from 'react-router';

import '../../assets/less/main.less';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Link to="/">Main page</Link> <Link to="/articles/new">New article</Link>
        {this.props.children}
      </div>
    )
  }
};