import React from 'react'
import PropTypes from "prop-types";
import Book from "./Book";

const Books = ({ books, onBookChange }) => {
    const booksMarkup = books.map((book, index) => <li key={index}><Book book={book} onBookChange={onBookChange} /></li>)

    return (
        <ol className="books-grid">
            {booksMarkup}
        </ol>
    )
}
Books.propTypes = {
    books: PropTypes.array.isRequired,
    onBookChange: PropTypes.func,
}

export default Books