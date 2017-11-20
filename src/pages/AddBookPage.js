import React, { Component } from "react"
import { Link } from "react-router-dom"
import Books from "../components/Books"
import * as BooksAPI from "../BooksAPI"
import PropTypes from "prop-types"

class AddBookPage extends Component {

    static propTypes = {
        shelfMapper: PropTypes.func.isRequired,
        onBookChange: PropTypes.func,
    }

    state = {
        books: [],
        searching: false,
    }

    handleQuery = (event) => {
        const query = event.target.value
        if (!this.state.searching) {
            this.setState({ searching: true })
            this.doSearch(query)
        }
    }

    doSearch(query) {
        BooksAPI.search(query, 10).then(books => {
            this.setState({
                searching: false,
                books: books ? this.props.shelfMapper(books).apply() : [],
            })
        })
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input type="text" onChange={this.handleQuery} placeholder="Search by title or author" />

                    </div>
                </div>
                <div className="search-books-results">
                    <Books books={this.state.books} onBookChange={this.props.onBookChange} />
                </div>
            </div>
        )
    }

}

export default AddBookPage