import React, { Component } from 'react';
import UploadPhoto from './components/UploadPhoto';
import SearchPhotos from './components/SearchPhotos';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './components/Header';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header title={this.props.title} />
        <Router>
          <div className="all-links" bg="light" variant="light">
            <Link className="link" to="/uploadPhoto/">Upload Photo</Link>
            <Link className="link" to="/searchPhotos/">Search Photos</Link>
          </div>
          <Route path="/uploadPhoto/" exact component={UploadPhoto} />
          <Route path="/searchPhotos/" exact component={() => <SearchPhotos imgNumToDisplay={100} />} />
        </Router>
      </div>
    );
  }
}

export default App;
