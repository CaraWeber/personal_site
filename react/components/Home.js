import React from 'react';

const darkerColor = {
	backgroundColor: '#343f46'
}



export default () => (

	<div>
		<div className="mdl-cell mdl-cell--11-col container">
			<div className="stripe">
			</div>
		</div>
		<div className="container">
			<div className="halfHome" id="leftHome">
				<img id="triImage" src="./triangles1.png"/>
			</div>
			<div className="halfHome my-text" id="rightHome">
				<p> Cara Weber </p>
				<p> web developer </p>
				<p> Brooklyn, NY </p>
				<p></p>
				<p></p>
				<p></p>
				<img id="tri" src="./Triangle.png" />
			</div>
		</div>

		<div className="mdl-cell mdl-cell--11-col container">
			<div className="stripe" style={darkerColor}>
			</div>
		</div>
		<div className="mdl-cell mdl-cell--11-col">
		</div>
 	</div>
	)