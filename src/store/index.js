import { createStore } from 'vuex'
import books from '../data/books';
import { generateId } from '../utils/generateId';


// Create a new store instance.
const store = createStore({
  state: {
    books: books,
    bookSelected: null
  },
  mutations: {
    addBook (state, book) {
      book.id = generateId();
      state.books.push(book)
    },

    removeBook(state, bookId){
      state.books = state.books.filter(book => book.id !== bookId)
    },

    editBook(state, book){
      state.books = state.books.filter(el => el.id !== book.id)
      state.books.push(book)
    },

    setBookSelected(state, book){
      state.bookSelected = book;
    }
  }
})

export default store;