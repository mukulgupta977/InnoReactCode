import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://0.0.0.0:8001/books-data/`)
      .then(res => {
        const books = res.data;
        this.setState({ books });
      })
  }

  render() {
    return (
      <ul>
        { this.state.books.map(item => <li>{item.book_name}</li>)}
      </ul>
    )
  }
}