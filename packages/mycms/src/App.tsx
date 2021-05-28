import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React aaa  cc mmmmdd dd
        </a>
      </header>
    </div>
  );
}

const NewApp = () => <React.StrictMode>
  <BrowserRouter 
    basename={'/v1'}
  >
    <Switch>
        <Route path="/aaa">
            <App /> 
        </Route>
    </Switch>
   
  </BrowserRouter>
</React.StrictMode>


export default NewApp;
