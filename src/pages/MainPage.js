import React, { Component } from "react"
import { Link } from "react-router-dom"
import Bookshelf from '../components/Bookshelf'
import * as BooksAPI from '../BooksAPI'

class MainPage extends Component {

    state = {
        books: [],
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => this.setState({ books }))
    }

    handleBookChange = (book) => {
        this.setState((state) => ({
            books: state.books.map((b) => ((b.id === book.id) ? book : b))
        }))
    }

    render() {
        const { books } = this.state
        const currentlyReadingBooks = books.filter((book) => book.shelf === 'currentlyReading')
        const wantToReadBooks = books.filter((book) => book.shelf === 'wantToRead')
        const readBooks = books.filter((book) => book.shelf === 'read')

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf title='Currently Reading' books={currentlyReadingBooks} onBookChange={this.handleBookChange} />
                        <Bookshelf title='Want to Read' books={wantToReadBooks} onBookChange={this.handleBookChange} />
                        <Bookshelf title='Read' books={readBooks} onBookChange={this.handleBookChange} />
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/add-book'>Add a book</Link>
                </div>
            </div>
        )
    }

}

export default MainPage