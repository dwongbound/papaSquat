  import React, { Component } from 'react';



  /*
  function clickMe(){
      alert("you clicked me");
  }
  */


  class Create extends Component {
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
                  <a className="create-workout-link" href="#courses">Create Workout</a>
                </div>
              </div>
              <div className="create-workout-container">
                <div className="create-workout-card">
                  <form className="create-workout-form">
                    <input type="text" id="title" name="title" placeholder="Title" />
                    <div className="checkboxes">
                      <label className="container">Triceps
                        <input type="checkbox" name="tag" defaultValue="triceps" />
                        <span className="checkmark" />
                      </label>
                      <label className="container">Back
                        <input type="checkbox" name="tag" defaultValue="back" />
                        <span className="checkmark" />
                      </label>
                      <label className="container">Quads
                        <input type="checkbox" name="tag" defaultValue="quads" />
                        <span className="checkmark" />
                      </label>
                      <label className="container">Shoulders
                        <input type="checkbox" name="tag" defaultValue="shoulders" />
                        <span className="checkmark" />
                      </label>
                      <label className="container">Biceps
                        <input type="checkbox" name="tag" defaultValue="biceps" />
                        <span className="checkmark" />
                      </label>
                      <label className="container">Core
                        <input type="checkbox" name="tag" defaultValue="core" />
                        <span className="checkmark" />
                      </label>
                      <label className="container">Legs
                        <input type="checkbox" name="tag" defaultValue="legs" />
                        <span className="checkmark" />
                      </label>
                      <label className="container">Calves
                        <input type="checkbox" name="tag" defaultValue="calves" />
                        <span className="checkmark" />
                      </label>
                      <label className="container">Yoga
                        <input type="checkbox" name="tag" defaultValue="yoga" />
                        <span className="checkmark" />
                      </label>
                      <label className="container">Endurance
                        <input type="checkbox" name="tag" defaultValue="endurance" />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <textarea id="description" name="description" placeholder="Description" rows={4} cols={50} defaultValue={""} />
                    <input className="submit-button" type="submit" defaultValue="Submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
  export default Create;