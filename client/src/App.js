import React from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Components/Display'
import useDarkMode from './Hooks/useDarkMode'

function App() {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    if(e.target.innerText == "Toggle Dark Mode"){
      e.target.innerText = "Toggle Light Mode"
      e.preventDefault();
      setDarkMode(!darkMode);
      return e.target.innerText
    }
    else{
      e.target.innerText = "Toggle Dark Mode"
      e.preventDefault();
      setDarkMode(!darkMode);
      return e.target.innerText
    }
  };

  return (
    <div className="App">
      <button onClick={toggleMode}>Toggle Dark Mode</button>
      <Display />
    </div>
  );
}

export default App;
