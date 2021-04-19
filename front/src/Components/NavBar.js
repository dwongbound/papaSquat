import React, {Component} from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
//import { Element } from "react-scroll";
//import { css } from "emotion";
//import LinkIcons from "./LinkIcons";

//the navigation bar will be used to go through each page

/* const Container = styled("div")`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: right;
  padding-left: 4vh;
  background-color: #FCEAC8;
`;

const StyledLink = styled(Link)`
  position: relative;
  font-size: 18px;
  font-family: "Open Sans";
  text-decoration: none;
  transition: 0.25s all ease;
  color: black;
  font-weight: 500;
  padding-right: 30px;
  &:hover {
    font-size: 22px;
  }
`;
const DummyFiller = styled("div")`
  margin-left: auto;
  margin-right: auto;
`;

const LinkBox = styled("div")`
  display: flex;
  align-items: center;
`;

const RightLinkBox = styled(LinkBox)`
  display: flex;
  justify-self: flex-end;
`;

	// Navbar effect
	var nav = document.querySelector('.main-nav');
	window.addEventListener('scroll', function(){
		if(window.pageYOffset > 10){
			nav.classList = 'main-nav small'
			document.querySelector('#logo').src = "images/logoblack.png";
			let links = document.querySelectorAll('.nav-links');
			for (let i=0; i<links.length; i++){
				links[i].style.color = 'rgb(70,55,48)'
			}
		} else {
			nav.classList ='main-nav'
			// document.querySelector('#logo').src = "images/logowhite.png"
			// let links = document.querySelectorAll('.nav-links');
			// for (let i=0; i<links.length; i++){
			// 	links[i].style.color = 'white';
			// }
		}
	})

	// pre-loader
	$(window).on("load", function(){
		$(".loader-wrapper").fadeOut("slow");

		// $(".navbar").addClass( "nav-fade-in-animation" );
		// $(".logo").addClass( "nav-fade-in-animation" );
		$(".tag").addClass( "tags-fade-in-animation" );
		$(".workout").addClass( "workouts-fade-in-animation" );
		$( ".resume-link" ).addClass( "highlight-animation3" );
		$( ".highlight1" ).addClass( "highlight-animation1" );
		$( ".highlight2" ).addClass( "highlight-animation2" );
	});
*/
class NavBar extends React.Component {

  state ={ clicked: false }

  handleClick= () => {
    this.setState({ clicked: !this.state.clicked })
  }
  render() {
    return (
      <nav className="navbar">
                  <button className="profile-link" href="#courses">Profile</button>
          <div className ="main-nav">
          
          </div>
               
                  <a className = "create-workout-link" href ="/Create">Create Workout</a>
          
          </nav>
              
    )          
  }
}
export default NavBar;
