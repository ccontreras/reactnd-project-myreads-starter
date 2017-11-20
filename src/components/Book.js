import React, { Component } from "react";
import PropTypes from "prop-types";
import BookshelfChanger from "./BookshelfChanger";

class Book extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        onBookChange: PropTypes.func,
    }

    handleShelfChange = (shelf) => {
        const { onBookChange, book } = this.props
        if (onBookChange) {
            const oldShelf = book.shelf
            onBookChange(book, oldShelf, shelf)
        }
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