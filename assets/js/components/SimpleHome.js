import React, { Component } from 'react';
import Header from './Header';
export default class SimpleHome extends Component {
	render(){
		return (
			<div className="home-container">
				<Header />
				<div className="content-wrapper">
					<div className="intro-title">
						<img src="img/self.jpg" />
						<h1> Hey there, I'm Josh Zhang. a full-stack developer who specializes in front-end JS frameworks. </h1>
					</div>
				</div>
			</div>
		)	
	}
}