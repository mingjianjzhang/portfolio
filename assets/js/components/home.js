import React, { Component } from 'react';

class Home extends Component {

	render(){
		return (
			<div className="home-container">
				<div className="top-half">
					<div className="black-square small">

					</div>
					<div className="black-square large">
						<h1>Greetings</h1>
					</div>
					<div class="connector-container">
						<div className="vertical-violet four">

						</div>
						<div className="vertical-violet five">

						</div>
						<div className="vertical-violet six">

						</div>
					</div>
				</div>
				<div className="bottom-half">
					<div className="beige-square small">

					</div>
					<div class="connector-container">
						<div className="red-line">

						</div>
						<div className="vertical-red one">

						</div>
						<div className="vertical-red two">

						</div>
						<div className="vertical-red three">

						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Home;