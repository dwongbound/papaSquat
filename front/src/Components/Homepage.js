import React, { Component } from 'react';


function clickMe(){
    alert("You clicked me")

}
class Homepage extends Component{
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

export default Homepage;