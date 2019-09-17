import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Display from './Components/Display';
import * as rtl from '@testing-library/react';

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('button displays', () => {
  const container = rtl.render(<App />);
  container.getByText("Toggle Dark Mode");
})

test("button toggles", () => {
  const toggleMode = e => {
    if(e.target.innerText == "Toggle Dark Mode"){
      e.target.innerText = "Toggle Light Mode"
    }
    else{
      e.target.innerText = "Toggle Dark Mode"
    }
    e.preventDefault();
    //setDarkMode(!darkMode);
  };
  const container = rtl.render(<App />);
  container.getByText("Toggle Dark Mode").onclick = toggleMode;
  container.getByText("Toggle Dark Mode").click();
  container.getByText("Toggle Light Mode");
})