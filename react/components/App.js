'use strict';

import React from 'react';

import {Link} from 'react-router';

const style = {
	color: 'rgb(96,113,125)',
	fontSize: '20px'
}



export default class App extends React.Component{
	constructor(props){
		super(props);
	}

	render() {
	return (
			<div>
					<div>
						<header className="mdl-layout__header mdl-layout__header--transparent" style={style}>
							<div className="mdl-layout__header-row mytext">
						     {/*Add spacer, to align navigation to the right  */}
						     <div className="mdl-layout-spacer"></div>
						     <nav className="mdl-navigation">
						        <Link className="mdl-navigation__link" to="/home" style={style}>  home  </Link>
						        <Link className="mdl-navigation__link" to="/projects" style={style}>  projects  </Link>
						        <Link className="mdl-navigation__link" to="/about" style={style}>  about  </Link>
						      </nav>
						     {/* <span className="mdl-layout-title ">title?</span> */}
						    </div>
						  </header>
					</div>			
					{this.props.children}
				</div>
		)
	}
}