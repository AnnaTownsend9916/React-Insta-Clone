import React, { Component } from 'react';
import './App.css';
import dummyData from './Components/data/dummy-data';
import PostsContainers from './Components/Posts/PostsContainers';
import SearchBar from './Components/SearchBar/SearchBarContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostsContainers posts={this.state.posts} />
      </div>
    );
  }
}

export default App;