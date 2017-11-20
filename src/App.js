import React from 'react'
import './App.css'
import { Route } from "react-router-dom"
import MainPage from "./pages/MainPage"
import AddBookPage from "./pages/AddBookPage"
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {

  state = {
    books: [],
  }

  mergeBookShelf(book, shelf) {
    BooksAPI.update(book, shelf).then(() => {
      const books = [...this.state.books];
      const newBook = Object.assign({}, book, { shelf })
      const index = books.findIndex((item) => item.id === book.id)

      if (index < 0) {
        books.push(newBook)
      } else {
        books[index] = newBook
      }

      this.setState({ books: books })
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({ books }))
  }

  handleBookChange = (book, oldShelf, newShelf) => {
    this.mergeBookShelf(book, newShelf)
  }

  /**
   * This is a mapper helper that is available specifically to the AddBookPage in order 
   * to expose the corresponds shelf for the most recent search. This is due to the 
   * response obtained after performing a search does not include the shelf property 
   * for books.
   */
  createShelfMapper = (booksToMap) => ({
    apply: () => booksToMap.map((book) => {
      const { books } = this.state
      const item = books.find((item) => item.id === book.id)
      if (item) {
        book.shelf = item.shelf
      }
      return book
    })
  })

  render() {
    const { books } = this.state
    const currentlyReading = books.filter((book) => book.shelf === 'currentlyReading')
    const wantToRead = books.filter((book) => book.shelf === 'wantToRead')
    const read = books.filter((book) => book.shelf === 'read')

    return (
      <div className="app">
        <Route exact path='/' render={() =>
          <MainPage
            currentlyReading={currentlyReading}
            wantToRead={wantToRead}
            read={read}
            onBookChange={this.handleBookChange}
          />
        } />
        <Route path='/add-book' render={() => (
          <AddBookPage
            shelfMapper={this.createShelfMapper}
            onBookChange={this.handleBookChange}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
