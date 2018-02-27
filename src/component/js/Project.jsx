import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col} from 'react-bootstrap'
import '../css/Projects.css'


export const ProjectsInfos = [
	{ 
		id: 1,
		name: "Plus pres de soi",
		description: "Lorem ipsum du Lorem ipsum du Lorem ipsum Lorem ipsum." ,
		img: require('../../img/ppds.png'),
		link: "http://www.pluspresdesoi.fr"
	},	
	{ 
		id: 2,
		name: "Digital conseil",
		description: "Lorem ipsum du Lorem ipsum du Lorem ipsum Lorem ipsum.",
		img: require('../../img/ppds.png')
	},	
	{
		id: 3,
		name: "Internaxx",
		description: "Lorem ipsum du Lorem ipsum du Lorem ipsum Lorem ipsum.",
		img: require('../../img/ppds.png')
	}
]



export const projects = ProjectsInfos.map( (project) =>
	<div className="Project" key={project.id}  id={project.name.split(' ').join('-')}>
		<h3>{project.name}</h3>
		<p>{project.description}</p>
		<a href={project.link} target="_blank"> <img src={project.img} alt="Web site" /> </a>
	</div>
)


const Project = () => (
	<div className="Projects" id="Projects">
		<Grid>
			<Row className="show-grid">
				<Col xs={10} xsOffset={1}>
					<div className="BlockPrincipal">
						<h2 className="banner">Projects</h2>
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
				</Col>
			</Row>
		</Grid>
	</div>
)


// console.log(projects)

export default Project

