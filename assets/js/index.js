import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { CSSTransition } from 'react-transition-group';
import createHistory from 'history/createBrowserHistory';
    
import Header from './components/Header';
import SimpleHome from './components/SimpleHome';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Example from './components/TransitionGroup';
require('../css/styles.scss');

const history = createHistory();

ReactDOM.render(
	<div>
		<Router history={history} >
			<div>
				<Route exact path="/" component={SimpleHome} />
				<Route exact path="/blog" component={Blog} />
				<Route exact path="/resume" component={Resume} />
				<Route exact path="/portfolio" component={Portfolio} />
				<Route exact path="/contact" component={Contact} />
			</div>
		</Router>
	</div>
, document.querySelector('#container'));