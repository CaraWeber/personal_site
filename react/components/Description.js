'use strict';

// pass text in as props?

// text url link at bottom of component, also screenShot should be a link

import React from 'react';
import { Link } from 'react-router';

export default class Description extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<p className="my-text-projects"><b> {this.props.project.title} </b></p>
				<p className="my-text-projects"> {this.props.project.oneLiner}</p>
				<p className="my-text-projects"> {this.props.project.desc} </p>
				<Link to={this.props.project.link}><p> {this.props.project.link}</p></Link>
			</div>
		)
	}

}