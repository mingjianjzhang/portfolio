import React, { Component } from 'react';
import Header from './Header';

export default class Blog extends Component {
	render(){
		return (
			<div className="blog-container">
				<Header />
				<h1> Blog </h1>
			</div>
		)	
	}
}