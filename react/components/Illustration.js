'use strict';

import React from 'react';
import {Entity, Scene} from 'aframe-react';
import AFRAME from 'aframe';





export default class extends React.Component {
	constructor(props){
		super(props);
	}


	render(){
		return(
				<Scene>
					<Entity light={{type: 'ambient', color: '#888'}}/>
        	<Entity light={{type: 'directional', intensity: 0.5}} position='-1 1 0'/>
        	<Entity light={{type: 'directional', intensity: 1}} position='1 1 0'/>

					<Entity
          animation__rot={{property: 'rotation', dur: 2000, loop: true, to: '360 360 360'}}
          animation__sca={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1'}}
          geometry='primitive: sphere'
          material={{color: '#e699ff'}}
          position='0 3 -15'/>
          
          <Entity
          animation__rot={{property: 'rotation', dur: 2000, loop: true, to: '360 360 360'}}
          animation__sca={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1'}}
          geometry='primitive: sphere'
          material={{color: '#e699ff'}}
          position='2 5 -11'/>

          	<Entity
          animation__rot={{property: 'rotation', dur: 2000, loop: true, to: '360 360 360'}}
          animation__sca={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1'}}
          geometry='primitive: sphere'
          material={{color: '#e699ff'}}
          position='5 9 -20'/>

				</Scene>
			)
	}
}