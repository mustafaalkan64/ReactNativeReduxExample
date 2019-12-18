import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import selectedBookReducer from './selectedBookReducer';

export default combineReducers({
    books: bookReducer,
    selectedBook: selectedBookReducer
});