import React, { Component } from "react";
import * as BooksAPI from '../BooksAPI'
import PropTypes from "prop-types";
import BookshelfChanger from "./BookshelfChanger";

class Book extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        onBookChange: PropTypes.func,
    }

    handleShelfChange = (shelf) => {
        const { book, onBookChange } = this.props
        BooksAPI.update(book, shelf).then((response) => {
            book.shelf = shelf
            onBookChange(book)
        })
    }

    render() {
        const { imageLinks, shelf, title, authors } = this.props.book
        const authorsLine = authors ? authors.join(', ') : ''
        const thumbnail = imageLinks ? imageLinks.thumbnail : ''

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${thumbnail}")` }}></div>
                    <BookshelfChanger selectedShelf={shelf} onShelfChange={this.handleShelfChange} />
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authorsLine}</div>
            </div>
        )
    }
}

export default Book