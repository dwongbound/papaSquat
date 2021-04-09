import React, { Component } from 'react';


function clickMe(){
    alert("You clicked me")

}
class Description extends Component{
    render(){
        return(
            <div>
            <title>omegasquat</title>
            {/* external css */}
            <link rel="stylesheet" type="text/css" href="style.css" />
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
            <div className="loader-wrapper">
              <div className="loader" />
            </div>
            <div className="main">
              <div className="main-nav">
                <div className="logo">
                  <a href="explore.html">omega<span className="red-text">squat</span></a>
                </div>
                <div className="navbar">
                  <a className="profile-link" href="#courses">Profile</a>
                  <a className="create-workout-link" href="#courses">Create Workout</a>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
export default Description;