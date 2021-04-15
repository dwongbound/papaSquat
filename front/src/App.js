import React from 'react';
//import $ from 'jquery';
import './App.css';
import Homepage from './Components/Homepage';
import Description from './Components/Description';
import Create from './Components/Create';
//import Header from './Components/Header';
import { ReactRouterGlobalHistory } from "react-router-global-history";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar.js";
import OAuth from "./Components/Oauth.js";

function fetch() {
  return new Promise(resolve => setTimeout(() => resolve(10), 1000));
}

function fetchAPI(param) {
  // param is a highlighted word from the user before it clicked the button
  return fetch("https://api.com/?param=" + param);
} 
function App(){

  /* state = {};

  componentDidMount(){
    this.workoutData()
  }

  workoutData= () => {
    fetch('/api/getAllWorkouts')
    .then(response => response.text())
    .then(message=> {
      this.setState({message: message});
    });
  };
*/


  /* toggleButtonState = () => {
    let selectedWord = window.getSelection().toString();
    fetchAPI(selectedWord).then(result => {
      this.setState({ result });
    });
  };
*/
    return (
      <div className ="App">
      <Router>
        <ReactRouterGlobalHistory />
        <Switch>
          <Route exact path="/HomePage">
            <Homepage />
          </Route>
          <Route exact path="/Description">
          
          </Route>
          <Route exact path="/Create">
          
          </Route>
        </Switch>
      </Router>

      <NavBar />
      <Homepage />
  <OAuth/>

      </div>
    );
  }

//ReactDOM.render(<App />, document.getElementById("root"));

export default App;