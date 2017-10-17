import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Header extends Component {
	render(){
		return (
			<div className="header">
				<ul>
					<li><Link to="/home">Home</Link></li>
					<li><Link to="/portfolio">Portfolio</Link></li>
					<li><Link to="/resume">Resume</Link></li>
					<li><Link to="/blog">Blog</Link></li>
					<li><Link to="/contact">Contact</Link></li>
				</ul>
			</div>
		)	
	}
}