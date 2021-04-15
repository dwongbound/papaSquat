import React, { Component } from 'react';

import pullups from '../images/pullups.jpg';

function clickMe(){
    alert("You clicked me")

}
class Description extends Component{
    render(){
      return (
        <div>
          
          <div className="loader-wrapper">
            <div className="loader" />
          </div>
          <div className="main">
            <div className="main-nav">
              <div className="logo">
                <a href="/Homepage">omega<span className="red-text">squat</span></a>
              </div>
              <div className="navbar">
                <a className="profile-link" href="#courses">Profile</a>
                <a className="create-workout-link" href="/Create">Create Workout</a>
              </div>
            </div>
            <div className="description-container">
              <div className="description-card">
                <div className="first-half">
                  <h1 className="description-title">Workout Title</h1>
                  <h1 className="description-author">David Kang</h1>
                  <img className="description-image" src={pullups} alt= "pullups" />
                  <div className="upvotes">
                    <h2>
                      {/* need to import font-awesome library for this (here's the documentation for React: https://fontawesome.com/how-to-use/on-the-web/using-with/react) */}
                      <i className="fas fa-chevron-up" />
                      <span className="upvote-count">15</span>
                      <i className="fas fa-chevron-down" />
                    </h2>
                  </div>
                </div>
                <div className="second-half">
                  <div className="tags">
                    <div className="tag">
                      <h2>Quads</h2>
                    </div> 
                    <div className="tag">
                      <h2>Shoulders</h2>
                    </div>
                  </div>
                  <div className="description">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Ultrices neque ornare aenean euismod. Natoque penatibus et magnis dis parturient. Blandit massa enim nec dui nunc. Faucibus scelerisque eleifend donec pretium. Facilisis magna etiam tempor orci eu. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Consectetur adipiscing elit pellentesque habitant morbi tristique. At consectetur lorem donec massa.
                      Neque sodales ut etiam sit amet. Et malesuada fames ac turpis egestas integer eget aliquet. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
export default Description;