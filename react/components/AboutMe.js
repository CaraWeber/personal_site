import React from 'react';

import Illustration from './Illustration';

const style = {
	width: "100%",
	height: "100%"
}

export default () => (

	<main className="mdl-grid container">
 		<div className="mdl-cell mdl-cell--4-col">
 			<img src="./IMAG1087.jpg"/>
 		</div>
 		<div id="aboutContainer" className="mdl-cell mdl-cell--7-col">
 			<h3 className="my-text"> from literature PhD to web developer ... </h3>
 			<p></p>
 			<p className="my-text-projects">     Last spring, I decided to make a radical career change, from the academic humanities to web development.  In just a few months, I went from learning javascript on my own, to gaining admission (based on a technical interview) to a top NYC bootcamp (Grace Hopper at Fullstack Academy), to excelling in the transition from pure javascript to an intensive training in a range of libraries and applications I encountered once the bootcamp began.</p>
     		<p className="my-text-projects"> After my time as a student, I applied and was selected to be a fellow at Grace Hopper, where I have spent the past three months helping to teach and mentor a cohort of bright, ambitious students.  The fellowship has also given me the opportunity to deepen my skills as a developer through mentorship from instructors and work on collaborative projects with other fellows. </p>
 		</div>
 	</main>
	)