import React, { Component } from 'react';
import { withRouter, Link } from 'react-router';

class Home extends Component {
  constructor(props) {
    super(props);
    
    this.deleteArticle = this.deleteArticle.bind(this);
  }
  
  deleteArticle() {
    const id = this.props.data._id;
    fetch('http://localhost:3000/api/articles/' + id, {
        method: 'DELETE',
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          if (this.props.deleteCallback) this.props.deleteCallback(id);
          else this.props.router.push('/');
        }
      })
      .catch(console.error);
  }

  render() {
    
    const {
      _id,
      title,
      urlToImage,
      description,
      publishedAt,
      author,
      url
    } = this.props.data;
    if (!_id) return <span />;
     
    const img = urlToImage && <img src={urlToImage} />;
    const desc = description && <p>{description}</p>;
    let date = publishedAt && new Date(publishedAt);
    date = date && <span>{new Date(date).toLocaleString('en-US').split(', ')[0]}</span>;
    const auth = author && <b>Author: {author}</b>;
    const linkUrl = url && <a href={url} target="_blank">Link</a>;
    
    return (
      <div className="item">
        <h3>{title}</h3>
        {img}
        {desc}
        <p>
          {date}
          <span>
            {auth}
            {linkUrl}
          </span>
        </p>
        <p>
          <Link to={`/articles/${_id}/edit`}>Edit</Link>
          <br />
          <button onClick={this.deleteArticle}>Delete</button>
        </p>
      </div>
    );
  }
};

Home.defaultProps = {
  data: {}
};

export default withRouter(Home);