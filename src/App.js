// import React from 'react';
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App0() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(10);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Yes, You clicked ${count} times`;
  });

  return (
    <div>
      <p>You just clicked {count} times</p>
      {/*Something*/}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;
