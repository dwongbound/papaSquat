import React, { Component } from 'react';
//import { Link, Route } from 'react-router-dom';
import pullups from '../images/pullups.jpg';
import random from '../images/random.jpg';
import row from '../images/row.jpg';
import shoulderPress from '../images/shoulder_press.jpg';
import Create from './Create';
import styled from "styled-components";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
//import oauth from './Oauth';
import $ from 'jquery';


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
              <div className="workouts-container">
                <div className="workouts">
                  <div className="workout workouts-fade-in-animation">
                    <div className="workout-top-half">
                      <img className="workout-image" src={pullups} alt = "Pullups" />
                    </div>
                    <a href = "/Description">
                    <div className="workout-bottom-half" >
                      <h1 className="workout-title">Extreme Pullups</h1>
                      <h2 className="workout-author">David Kang</h2>
                      <p className="workout-description">Work your entire back with this intense but quick 20-minute workout.</p>
                     
                      <div className="upvotes">
                      <h2>
                        {/* need to import font-awesome library for this (here's the documentation for React: https://fontawesome.com/how-to-use/on-the-web/using-with/react) */}
                        <i className="fas fa-chevron-up" />
                        <span className="upvote-count">15</span>
                        <i className="fas fa-chevron-down" />
                      </h2>
                    </div>
                    
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
                      
                      <div className="upvotes">
                      <h2>
                        {/* need to import font-awesome library for this (here's the documentation for React: https://fontawesome.com/how-to-use/on-the-web/using-with/react) */}
                        <i className="fas fa-chevron-up" />
                        <span className="upvote-count">15</span>
                        <i className="fas fa-chevron-down" />
                      </h2>
                    </div>

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
                 
                      <div className="upvotes">
                      <h2>
                        {/* need to import font-awesome library for this (here's the documentation for React: https://fontawesome.com/how-to-use/on-the-web/using-with/react) */}
                        <i className="fas fa-chevron-up" />
                        <span className="upvote-count">15</span>
                        <i className="fas fa-chevron-down" />
                      </h2>
                    </div>


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
                     
                      <div className="upvotes">
                      <h2>
                        {/* need to import font-awesome library for this (here's the documentation for React: https://fontawesome.com/how-to-use/on-the-web/using-with/react) */}
                        <i className="fas fa-chevron-up" />
                        <span className="upvote-count">15</span>
                        <i className="fas fa-chevron-down" />
                      </h2>
                    </div>


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
                     

                      <div className="upvotes">
                      <h2>
                        {/* need to import font-awesome library for this (here's the documentation for React: https://fontawesome.com/how-to-use/on-the-web/using-with/react) */}
                        <i className="fas fa-chevron-up" />
                        <span className="upvote-count">15</span>
                        <i className="fas fa-chevron-down" />
                      </h2>
                    </div>

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
                  
                      <div className="upvotes">
                      <h2>
                        {/* need to import font-awesome library for this (here's the documentation for React: https://fontawesome.com/how-to-use/on-the-web/using-with/react) */}
                        <i className="fas fa-chevron-up" />
                        <span className="upvote-count">15</span>
                        <i className="fas fa-chevron-down" />
                      </h2>
                    </div>

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
                     
                      <div className="upvotes">
                      <h2>
                        {/* need to import font-awesome library for this (here's the documentation for React: https://fontawesome.com/how-to-use/on-the-web/using-with/react) */}
                        <i className="fas fa-chevron-up" />
                        <span className="upvote-count">15</span>
                        <i className="fas fa-chevron-down" />
                      </h2>
                    </div>

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
                     

                      <div className="upvotes">
                      <h2>
                        {/* need to import font-awesome library for this (here's the documentation for React: https://fontawesome.com/how-to-use/on-the-web/using-with/react) */}
                        <i className="fas fa-chevron-up" />
                        <span className="upvote-count">15</span>
                        <i className="fas fa-chevron-down" />
                      </h2>
                    </div>


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
                   
                    <div className="upvotes">
                    <h2>
                      {/* need to import font-awesome library for this (here's the documentation for React: https://fontawesome.com/how-to-use/on-the-web/using-with/react) */}
                      <div id='fas fa-chevron-up' />
                      <span className="upvote-count">15</span>
                      <div id="fas fa-chevron-down" />
                    </h2>
                  </div>

                  </div>
                </div> 
                </div>
              </div>
            </div>
            </div>
        );
      }
    }
  

export default Homepage;