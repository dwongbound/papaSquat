import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import pullups from '../images/pullups.jpg';
import random from '../images/random.jpg';
import row from '../images/row.jpg';
import shoulderPress from '../images/shoulder_press.jpg';
import Create from './Create';
import styled from "styled-components";
import { render } from 'react-dom';


function clickMe(){
    alert("You clicked me")
}

function CreatePage(){
  return this
}

const sLink = ({className}) => (
  <a className ={Create}>
  </a>
);

const Button = styled(sLink)`
  text-decoration: none;
  font-size: 1.1em;
  color: #263044;
  display: block;
  border-radius: 5px;
  float: right;
  line-height: 0.85;
  padding: 10px;
  position: relative;
`;
var responseArray;

class Homepage extends Component{
  constructor() {
    super();
    //used to track when fetch request completes
    this.state = {loading:true}
  }
  //calls fetch getAllWorkouts once when homepage loads
    componentDidMount() {
      const that = this;
      console.log("before fetch:");
      fetch("http://localhost:8080/api/getAllWorkouts")
      .then(function(response){ return response.json(); })
      .then(function(data) {
        responseArray = data;
        that.setState({loading : false}, function() {console.log("penis" + that.state.loading);})
      })
    }
    componentWillUnmount() {

    }
    render(){
      var workouts = [];
      //rerenders html with workouts once fetch request completes
      if(this.state.loading === false){
        for(let i = 0; i < responseArray.length; i++){
          var workout = (
            <div className="workout workouts-fade-in-animation">
            <div className="workout-top-half">
            <img className="workout-image" src={row} alt = "Row" />
            </div>
            <div className="workout-bottom-half">
            <h1 className="workout-title">{responseArray[i].caption}</h1>
            <h2 className="workout-author">{responseArray[i].creator}</h2>
            <p className="workout-description">{responseArray[i].desc}</p>
    
            </div>
            </div>
      
          )
          workouts.push(workout);
        }
      }
        return (
    
          <div className = "Homepage">
        
            <title>omegapapasquat</title>
           
         {/* external css */}
         <link rel="stylesheet" type="text/css" href="styles.css" />
         {/* required meta tags */}
         <meta charSet="utf-8" />
         <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
         <meta property="og:image" content />
         <meta property="og:type" content="website" />
         <meta property="og:title" content="omegasquat" />
         <meta property="og:description" content="Share your personalized workouts with your friends!" />
         {/* fonts */}
         <link rel="preconnect" href="https://fonts.gstatic.com" />
         <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet" />
         <link href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@300;400;500;700&display=swap" rel="stylesheet" />
         <link rel="preconnect" href="https://fonts.gstatic.com" />
         <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Caption:wght@700&display=swap" rel="stylesheet" />
         
            <div className="main">
              <div className="main-nav">
                <div className="logo">
                  <a href="#homepage">omegapapa<span className="red-text">squat</span></a>
                </div>

                <div className="navbar">
                  <button className="profile-link" href="#courses">Profile</button>
            
          
            
               
                  <a className = "create-workout-link" href ="/Create">Create Workout</a>
          
          
              
                </div>
              </div>


              
              {/* takes up space behind hovering nav bar. */}
              <div className="navbar-buffer" /> 
              <div className="tags-container">
                <div className="tags">
                  <div className="tag tags-fade-in-animation">
                    <h2>Triceps</h2>
                  </div> 
                  <div className="tag tags-fade-in-animation">
                    <h2>Back</h2>
                  </div> 
                  <div className="tag tags-fade-in-animation">
                    <h2>Quads</h2>
                  </div> 
                  <div className="tag tags-fade-in-animation">
                    <h2>Shoulders</h2>
                  </div> 
                  <div className="tag tags-fade-in-animation">
                    <h2>Core</h2>
                  </div> 
                  <div className="tag tags-fade-in-animation">
                    <h2>Legs</h2>
                  </div> 
                  <div className="tag tags-fade-in-animation">
                    <h2>Yoga</h2>
                  </div> 
                  <div className="tag tags-fade-in-animation">
                    <h2>Endurance</h2>
                  </div> 
                  <div className="tag tags-fade-in-animation">
                    <h2>Biceps</h2>
                  </div>
                  <div className="tag tags-fade-in-animation">
                    <h2>Calves</h2>
                  </div>  
                </div>
              </div>
              <div className="workouts-container">
                
                <div className="workouts">
                {workouts}
                  {/* <div className="workout workouts-fade-in-animation">
                    <div className="workout-top-half">
                      <img className="workout-image" src={pullups} alt = "Pullups" />
                    </div>
                    <a href = "/Description">
                    <div className="workout-bottom-half" >
                      <h1 className="workout-title">Extreme Pullups</h1>
                      <h2 className="workout-author">David Kang</h2>
                      <p className="workout-description">Work your entire back with this intense but quick 20-minute workout.</p>
                    </div>
                    </a>
                  </div> 
                  <div className="workout workouts-fade-in-animation">
                    <div className="workout-top-half">
                      <img className="workout-image" src={shoulderPress} alt = "ShoulderPress" />
                    </div>
                    <div className="workout-bottom-half">
                      <h1 className="workout-title">Lorem Ipsum</h1>
                      <h2 className="workout-author">David Kang</h2>
                      <p className="workout-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. </p>
                    
                    </div>
                  </div> 
                  <div className="workout workouts-fade-in-animation">
                    <div className="workout-top-half">
                      <img className="workout-image" src={row} alt = "Row" />
                    </div>
                    <div className="workout-bottom-half">
                      <h1 className="workout-title">Lorem Ipsum</h1>
                      <h2 className="workout-author">David Kang</h2>
                      <p className="workout-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. </p>
                 
                    </div>
                  </div> 
                  <div className="workout workouts-fade-in-animation">
                    <div className="workout-top-half">
                      <img className="workout-image" src={random} alt = "random"/>
                    </div>
                    <div className="workout-bottom-half">
                      <h1 className="workout-title">Lorem Ipsum</h1>
                      <h2 className="workout-author">David Kang</h2>
                      <p className="workout-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. </p>
                     
                    </div>
                  </div> 
                  <div className="workout workouts-fade-in-animation">
                    <div className="workout-top-half">
                      <img className="workout-image" src={random} alt = "random" />
                    </div>
                    <div className="workout-bottom-half">
                      <h1 className="workout-title">Lorem Ipsum</h1>
                      <h2 className="workout-author">David Kang</h2>
                      <p className="workout-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. </p>
                     
                    </div>
                  </div> 
                  <div className="workout workouts-fade-in-animation">
                    <div className="workout-top-half">
                      <img className="workout-image" src={random} alt = "random" />
                    </div>
                    <div className="workout-bottom-half">
                      <h1 className="workout-title">Lorem Ipsum</h1>
                      <h2 className="workout-author">David Kang</h2>
                      <p className="workout-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. </p>
                  
                    </div>
                  </div> 
                  <div className="workout workouts-fade-in-animation">
                    <div className="workout-top-half">
                      <img className="workout-image" src={random} alt = "random"/>
                    </div>
                    <div className="workout-bottom-half">
                      <h1 className="workout-title">Lorem Ipsum</h1>
                      <h2 className="workout-author">David Kang</h2>
                      <p className="workout-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. </p>
                     
                    </div>
                  </div> 
                  <div className="workout workouts-fade-in-animation">
                    <div className="workout-top-half">
                      <img className="workout-image" src={random} alt = "random"/>
                    </div>
                    <div className="workout-bottom-half">
                      <h1 className="workout-title">Lorem Ipsum</h1>
                      <h2 className="workout-author">David Kang</h2>
                      <p className="workout-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. </p>
                     
                    </div>
                  </div> 
                  <div className="workout workouts-fade-in-animation">
                  <div className="workout-top-half">
                    <img className="workout-image" src={random} alt = "random"/>
                  </div>
                  <div className="workout-bottom-half">
                    <h1 className="workout-title">Lorem Ipsum</h1>
                    <h2 className="workout-author">David Kang</h2>
                    <p className="workout-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. </p>
                   
                  </div>
                </div>*/} 
                </div>
              </div> 
            </div>
          </div>
        );
      }
}

export default Homepage;