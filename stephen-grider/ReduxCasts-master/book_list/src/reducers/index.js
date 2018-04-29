import { combineReducers } from "redux";
import BooksReducer from "./reducer_books";
import ActiveBook from "./reducer_active_book";

const rootReducer = combineReducers({ //our state will always be equal to an object with a key of books and a value of an array of books.  
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
