import React from 'react';

import Description from './Description';

import { expressDevMap, paragraphic, asanaspace, paraGimg, asanaImg } from './project-info';


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
					</div>
				</div>
				<div className="container row">
					<div className="half desc">
						<Description className="half" project={paragraphic}/>
					</div>
					<div className="half" style={paraGimg}>	
					</div>
				</div>
				<div className="container row">
					<div className="half desc">
						<Description project={asanaspace}/>
					</div>
					<div className="half" style={asanaImg}>
					</div>
				</div>
		 	</div>
		)
	}
}