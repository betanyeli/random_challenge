import React from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './screens/Login';

class App extends React.Component {


  render(){
   

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            hOLOOOO AKSJKLAJSKL
          </p>
          <Login />


        </header>
      </div>
    );
  }

}

export default App;