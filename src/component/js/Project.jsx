import React from 'react'
import { Link } from 'react-router-dom'
import {Projects} from './Projects.jsx'
import '../css/Projects.css'

class ProjectsWrap extends React.Component {

	render() {
		return (
			<div className="Projects" id="Projects">
				<div className="BlockPrincipal">
					<h1 className="banner">Projects</h1>
					{Projects}
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

export default ProjectsWrap

