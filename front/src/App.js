import React from 'react';
//import $ from 'jquery';
import './App.css';
//import './css/styles.css';
import Homepage from './Components/Homepage';
import Description from './Components/Description';
import Create from './Components/Create';
//import Header from './Components/Header';
import { ReactRouterGlobalHistory } from "react-router-global-history";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar.js"


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
      <div className ="App">
      <Router>
        <ReactRouterGlobalHistory />
        <Switch>
          <Route exact path="/HomePage">
            <Homepage />
          </Route>
          <Route exact path="/Description">
            <Description />
          </Route>
          <Route exact path="/Create">
            <Create />
          </Route>
        </Switch>
      </Router>
      <Homepage />
      
  
        <div>{this.state.result}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;