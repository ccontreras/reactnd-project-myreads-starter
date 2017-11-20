import React, { Component } from "react";
import * as BooksAPI from '../BooksAPI'
import PropTypes from "prop-types";
import BookshelfChanger from "./BookshelfChanger";
import * as _ from "lodash";

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
        const { book } = this.props
        const authors = book.authors.join(', ')

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}></div>
                    <BookshelfChanger selectedShelf={book.shelf} onShelfChange={this.handleShelfChange} />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{authors}</div>
            </div>
        )
    }
}

export default Book