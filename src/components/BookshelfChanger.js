import React, { Component } from "react"
import PropTypes from "prop-types";

const OPTIONS = [
    { value: 'none', desc: 'Move to...' },
    { value: 'currentlyReading', desc: 'Currently Reading' },
    { value: 'wantToRead', desc: 'Want to Read' },
    { value: 'read', desc: 'Read' },
    { value: 'none', desc: 'None' },
]

const BookshelfChanger = ({ selectedShelf, onShelfChange }) => {
    const handleSelectChange = (event) => {
        const value = event.target.value
        if (onShelfChange)
            onShelfChange(value)
    }
    const markupOptions = OPTIONS.map((option, index) => (
        <option key={index} value={option.value}>{option.desc}</option>
    ))

    return (
        <div className="book-shelf-changer">
            <select onChange={handleSelectChange} defaultValue={selectedShelf}>
                {markupOptions}
            </select>
        </div>
    )
}
BookshelfChanger.propTypes = {
    selectedShelf: PropTypes.string,
    onShelfChange: PropTypes.func,
}

export default BookshelfChanger