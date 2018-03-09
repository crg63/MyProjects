import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Projects.css'


export const ProjectsInfos = [
	{ 
		id: 1,
		name: "pluspresdesoi.fr",
		description: "Lorem ipsum du Lorem ipsum du Lorem ipsum Lorem ipsum." ,
		img: require('../../img/ppds.png'),
		link: "http://www.pluspresdesoi.fr"
	},
	{
		id: 2,
		name: "lokae.com",
		description: "Lorem ipsum du Lorem ipsum du Lorem ipsum Lorem ipsum.",
		img: require('../../img/ppds.png')
	},	
	{
		id: 3,
		name: "internaxx.com",
		description: "Lorem ipsum du Lorem ipsum du Lorem ipsum Lorem ipsum.",
		img: require('../../img/ppds.png')
	}
]


export const projects = ProjectsInfos.map( (project) => 
	<div className="Project" key={project.id}  id={project.name.split(' ').join('-')}>
		<div>
			<a href={project.link} target="_blank"> <img src={project.img} alt="Web site" /> </a>
			<button type="submit" value="Send" className="btnInfo">+ Plus d'info </button>
		</div>
		<div>
			<div>
				<p>{project.name}</p>
				<p>{project.description}</p>
				<div>
					<p> 12 </p>
					<button type="submit" value="Send" className="btnClap"> <img src={require("../../img/y.png")} /> </button>
				</div>
			</div>
		</div>
	</div>
)


const Project = () => (
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
)


// console.log(projects)

export default Project

