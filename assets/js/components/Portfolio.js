import React, { Component } from 'react';
import Header from './Header';
import { CSSTransition } from 'react-transition-group';

export default class Portfolio extends Component {
	render(){
		return (
			<CSSTransition
				in={true}
				mountOnEnter
				unmountOnExit
				appear
				classNames="fade"
				timeout={2000}
				onEntering={()=>console.log("Entering")}
				onExiting={()=>console.log("Exiting")}>
				<div className="portfolio-container">
					<Header />
					<div className="content-wrapper">
						<h1> Portfolio </h1>
						<h1> Live! </h1>
						<div className="project-container">
							<h1>Iris Fashion Inc.</h1>
						</div>
						<div className="project-container">
							<h1> Cramilo Sunglasses </h1>
						</div>
						<h1> In Progress </h1>
						<div className="project-container">
							<h1> Giftiply </h1>
						</div>
						<h2> Personal </h2>
						<div className="project-container">
							<h1> Currents </h1>
						</div>
					</div>
				</div>	
			</CSSTransition>
		)	
	}
}