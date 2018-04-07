import React, { Component } from 'react';
import './app.css';
import BookList from '../../containers/book-list/BookList';
import BookDetail from '../../containers/book-detail/BookDetail';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BookList />
        <BookDetail />
      </div>
    );
  }
}

export default App;
