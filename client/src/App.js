import React from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Components/Display'

class App extends React.Component{

  render() {
    return (
      <div className="App">
         <Display/>
      </div>
    );
  }
}

export default App;
