import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  return (
    <div className="App">
      HTTP Hanlding using React and Axios
      {/* <PostList /> */}
      <PostForm />
    </div>
  );
}

export default App;
