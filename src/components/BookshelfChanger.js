import React, { Component } from "react"
import PropTypes from "prop-types";

class BookshelfChanger extends Component {

    static propTypes = {
        selectedShelf: PropTypes.string,
        onShelfChange: PropTypes.func,
    }

    state = {
        options: [
            { value: 'none', desc: 'Move to...' },
            { value: 'currentlyReading', desc: 'Currently Reading' },
            { value: 'wantToRead', desc: 'Want to Read' },
            { value: 'read', desc: 'Read' },
            { value: 'none', desc: 'None' },
        ],
    }

    handleSelectChange = (event) => {
        const { onShelfChange } = this.props
        const value = event.target.value
        
        // Prevent performing any action if the selected shelf 
        // corresponds to 'none'
        if (value !== 'none') {
            if (onShelfChange)
                onShelfChange(value)
        }
    }

    render() {
        const { selectedShelf } = this.props
        const { options } = this.state
        const markupOptions = options.map((option, index) => (
            <option key={index} value={option.value}>{option.desc}</option>
        ))

        return (
            <div className="book-shelf-changer">
                <select onChange={this.handleSelectChange} defaultValue={selectedShelf}>
                    {markupOptions}
                </select>
            </div>
        )
    }

}

export default BookshelfChanger