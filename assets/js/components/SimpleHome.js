import React, { Component } from 'react';
import Header from './Header';
export default class SimpleHome extends Component {
	render(){
		return (
			<div>
				<Header />
				<h1> Home Page </h1>
			</div>
		)	
	}
}