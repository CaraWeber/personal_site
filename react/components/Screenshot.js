'use strict';

import React from 'react';

// pass an image url down as props? 

const imgStyle = {
	backgroundSize: 'cover',
	height: '100%'
}

export default class ScreenShot extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div>
				<img src={this.props.projUrl} style={imgStyle}/>
			</div>
		)
	}

}