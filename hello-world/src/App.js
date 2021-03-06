import React from 'react';
import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet'
import Component2 from './components/Component2'
import Welcome from './components/Welcome'

import Hello from './components/Hello'

import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">
      <NameList />
      {/* <UserGreeting /> */}
      {/* <ParentComponent/> */}
      {/* <EventBind /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Counter /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Hello World !
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Greet></Greet> */}
      {/* <Greet name = "DB" age = "20">
        <p>This is child prop</p>
      </Greet> */}
      {/* <Greet name = "Y" age = "21"/> */}
      {/* <Greet name = "P" age = "22"/> */}
      {/* <Welcome name = "DB" age = "150"/> */}
      {/* <Welcome name = "Y" age = "21"/>
      <Welcome name = "P" age = "22"/> */}
      {/* <Message /> */}
      {/* <Component2 />
      <Welcome />
      <Hello /> */}
    </div>
  );
}

export default App;
