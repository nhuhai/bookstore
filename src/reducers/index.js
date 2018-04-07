import { combineReducers } from 'redux';
import books from './books';
import activeBook from './active-book';

const rootReducer = combineReducers({
  books,
  activeBook
});

export default rootReducer;
