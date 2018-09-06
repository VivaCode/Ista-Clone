import React, { Component } from 'react';
import './App.css';
import PostsPage from './Components/PostContainer/PostsPage';
import Authenticate from "./Components/Login/Login";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return <PostsPage />;
  }
}

export default Authenticate(App);
