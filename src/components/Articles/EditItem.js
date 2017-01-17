import React, { Component, PropTypes } from 'react'

class EditItem extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      error: false,
      data: {
        title: '',
        description: '',
        author: '',
        url: '',
        urlToImage: '',
        publishedAt: ''
      }
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentWillMount() {
    const { id } = this.props.routeParams;

    fetch('http://localhost:3000/api/articles/' + id)
      .then(response => response.json())
      .then(article => this.setState({ data: article }))
      .catch(error => this.setState({ error }));
  }
  
  handleSubmit() {
    const { id } = this.props.routeParams;

    let formData = [];
    
    Object.keys(this.state.data).forEach((name) => {
        const key = name;
        const value = encodeURI(this.state.data[name] || '');
        formData.push(`${name}=${value}`);
      }
    );
    console.log(formData);
    fetch('http://localhost:3000/api/articles/' + id, {
        method: 'PUT',
        headers: {  
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
        },  
        body: formData.join('&')
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) this.props.router.push('/');
      })
      .catch(console.error);
  }
  
  handleChange(field) {
    return (e) => {
      this.setState({
        data: {
          ...this.state.data,
          [field]: e.target.value
        }
      });
    }
  }
  
  render () {
    const {
      title,
      description,
      author,
      url,
      urlToImage,
      publishedAt,
    } = this.state.data;
    
    return (
      <div>
        <p>{this.state.error}</p>
        <input type="text" onChange={this.handleChange('title')} name="title" value={title} placeholder="title" />
        <br />
        <input type="text" onChange={this.handleChange('description')} name="description" value={description} placeholder="description" />
        <br />
        <input type="text" onChange={this.handleChange('author')} name="author" value={author} placeholder="author" />
        <br />
        <input type="text" onChange={this.handleChange('url')} name="url" value={url} placeholder="url" />
        <br />
        <input type="text" onChange={this.handleChange('urlToImage')} name="urlToImage" value={urlToImage} placeholder="urlToImage" />
        <br />
        <input type="date" onChange={this.handleChange('publishedAt')} name="publishedAt" value={(publishedAt || '').substr(0, 10)} placeholder="publishedAt" />
        <br />
        <button type="submit" onClick={this.handleSubmit}>Save</button>
      </div>
    );
  }
}

export default EditItem;