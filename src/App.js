import React, { Component } from 'react';
import './App.css';
import dummyData from './Components/dummyData';
import PostContainer from './Components/PostContainer/PostContainer';
import SearchBar from './Components/SearchBar/SearchBar'

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;
