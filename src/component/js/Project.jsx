import React from 'react'
import { Link } from 'react-router-dom'
import {projects} from './Projects.jsx'
import '../css/Projects.css'

class Projects extends React.Component {

	render() {
		return (
			<div className="Projects" id="Projects">
				<div className="BlockPrincipal">
					<h1 className="banner">Projects</h1>
					{projects}
				</div>
				
				<div className="NextPageBlock">
					<div className="NextPage"> 
							<Link to='/Presentation'> {"<"} </Link>
						</div>
						<div className="NextPage">
							<Link to='/Contact'> > </Link>   
						</div>
					</div>
			</div>
		);
	}
};


// console.log(projects)

export default Projects

