import React, { Component } from 'react';
import './app.css';
import BookList from '../../containers/book-list/BookList';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BookList />
      </div>
    );
  }
}

export default App;
