import React from 'react'
import './App.css'
import { Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AddBookPage from "./pages/AddBookPage";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path='/' component={MainPage} />
        <Route path='/add-book' component={AddBookPage} />
      </div>
    )
  }
}

export default BooksApp
