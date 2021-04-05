  import React, { Component } from 'react';



  function clickMe(){
      alert("you clicked me");
  }
  class Create extends Component {
      render(){
          return(
              <div> 
              <button onClick = {clickMe}>
              Button
              </button>
              </div>
          );
      }
  }

  export default Create;