import React, { Component } from 'react';
//import { Link, Route } from 'react-router-dom';
import random from '../images/random.jpg';
import row from '../images/row.jpg';
import shoulderPress from '../images/shoulder_press.jpg';
import Create from './Create';
import styled from "styled-components";
//import oauth from './Oauth';

import Workouts from './Workouts'


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




class Homepage extends Component{
    render(){
        return (
    
          <div className = "Homepage">
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
              <Workouts />
            </div>
            </div>
        );
      }
    }
  

export default Homepage;