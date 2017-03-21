import React from 'react';

import Description from './Description';
import ScreenShot from './ScreenShot';

import { expressDevMap, paragraphic, asanaspace } from './project-info';

// text descriptions here as "const" to pass in to Description component?

// pass project title (pTitle) & text (pText) to components as props 

// save pTitle, pText as strings in another file and import them here

const myHeading = {
	color: 'rgb(69, 87, 99)',
	"fontFamily": 'Poiret One, cursive',
	"fontSize" : '40px',
	"fontWeight": 'bold',
	"textAlign" : "center",
	margin: '0px',
	marginBottom: '35px'
}


export default class ProjectPage extends React.Component {
	constructor(props){
		super(props);
	}

	render() { 
		return(
			<div className="row-container">
		 		<h1 style={myHeading}> projects </h1>
		 		<div className="container row">
					<div className="half desc">
						<Description  project={expressDevMap}/>
					</div>
					<div className="half">
					 	<ScreenShot/>
					</div>
				</div>
				<div className="container row">
					<div className="half desc">
						<Description className="half" project={paragraphic}/>
					</div>
					<div className="half">
					 	<ScreenShot projUrl={'./paragraphic.png'}/>
					</div>
				</div>
				<div className="container row">
					<div className="half desc">
						<Description project={asanaspace}/>
					</div>
					<div className="half">
					 	<ScreenShot projUrl={'./asanas.png'}/>
					</div>
				</div>
		 	</div>
		)
	}
}