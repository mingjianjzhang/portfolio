import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Header extends Component {

	constructor(props) {
		super(props)
		this.state = {
			fixHeight: false
		}
	}
	componentDidMount(){
		console.log("did i mount");
		window.addEventListener('scroll', this.handleScroll.bind(this), true);
	}
	handleScroll(event) {
		console.log(event.target.scrollTop);
		if (event.target.scrollTop > 38) {
			this.setState({fixHeight: true})
		} 
		if (event.target.scrollTop < 38) {
			this.setState({fixHeight: false})
		}
	}

	render(){
		return (
			<div className={this.state.fixHeight ? 'header-container fixed-container' : 'header-container'}>
				<div className={this.state.fixHeight ? 'header fixed' : 'header'}>
					<h1><Link to="/">J.Z.</Link></h1>
					<ul>
						<li><Link to="/portfolio">Portfolio</Link></li>
						<li><Link to="/resume">Resume</Link></li>
						<li><Link to="/blog">Blog</Link></li>
						<li><Link to="/contact">Contact</Link></li>
					</ul>
				</div>
			</div>
		)	
	}
}