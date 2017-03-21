'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRedirect} from 'react-router';

import App from './react/components/App';
import AboutMe from './react/components/AboutMe';
import Home from './react/components/Home';
import ProjectPage from './react/components/ProjectPage';




//will need store!





ReactDOM.render(
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRedirect to="/home" />
        <Route path="home" component={ Home } />
        <Route path="about" component={ AboutMe } />
        <Route path="projects" component={ ProjectPage } />
      </Route>
		</Router>,
	document.getElementById('main'));

console.log("hello world!");