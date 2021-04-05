import React from 'react';
//import $ from 'jquery';
import './App.css';
//import Homepage from './Components/Homepage';
//import Description from './Components/Description';
//import Create from './Components/Create';
import ReactDOM from 'react-dom';


function fetch() {
  return new Promise(resolve => setTimeout(() => resolve(10), 1000));
}

function fetchAPI(param) {
  // param is a highlighted word from the user before it clicked the button
  return fetch("https://api.com/?param=" + param);
}

class App extends React.Component {
  state = { result: null };

  toggleButtonState = () => {
    let selectedWord = window.getSelection().toString();
    fetchAPI(selectedWord).then(result => {
      this.setState({ result });
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleButtonState}> Click me </button>
        <div>{this.state.result}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;