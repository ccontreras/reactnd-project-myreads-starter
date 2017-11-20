import React, { Component } from "react"
import { Link } from "react-router-dom"
import Bookshelf from '../components/Bookshelf'
import PropTypes from "prop-types";

class MainPage extends Component {

    static propTypes = {
        currentlyReading: PropTypes.array.isRequired,
        wantToRead: PropTypes.array.isRequired,
        read: PropTypes.array.isRequired,
        onBookChange: PropTypes.func,
    }

    render()    {
        const { currentlyReading, wantToRead, read, onBookChange } = this.props

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf title='Currently Reading' books={currentlyReading} onBookChange={onBookChange} />
                        <Bookshelf title='Want to Read' books={wantToRead} onBookChange={onBookChange} />
                        <Bookshelf title='Read' books={read} onBookChange={onBookChange} />
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