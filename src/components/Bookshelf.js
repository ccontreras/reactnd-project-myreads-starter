import React from 'react'
import PropTypes from 'prop-types'
import Books from './Books'

const Bookshelf = ({ title, books, onBookChange }) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <Books books={books} onBookChange={onBookChange} />
            </div>
        </div>
    )
}
Bookshelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onBookChange: PropTypes.func,
}

export default Bookshelf