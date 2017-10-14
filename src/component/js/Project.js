import React from 'react'
import { Grid, Row, Col} from 'react-bootstrap'
import '../css/Projects.css'

const ProjectsInfos = [
{ 
	key: 1,
	name: "Plus pres de soi",
	description: "Lorem ipsum du Lorem ipsum du Lorem ipsum Lorem ipsum." ,
	img: require('../../img/ppds.png'),
	link: "http://www.pluspresdesoi.fr"
},	
{ 
	key: 2,
	name: "Digital conseil",
	description: "Lorem ipsum du Lorem ipsum du Lorem ipsum Lorem ipsum.",
	img: require('../../img/ppds.png')
},	
{
	key: 3,
	name: "Future projects", 
	description: "Lorem ipsum du Lorem ipsum du Lorem ipsum Lorem ipsum.",
	img: require('../../img/ppds.png')
}
]

 
const projects = ProjectsInfos.map( (project) =>
	<div className="Project">
		<h3>{project.name}</h3>
		<p>{project.description}</p>
		<a href={project.link}> <img src={project.img} alt="Web site" /> </a>
	</div>
)


const Project = () => (
	<div className="Projects">
		<Grid>
			<Row className="show-grid">
				<Col xs={10} xsOffset={1}>
					<h2 className="banner">Projects</h2>
					{projects}
				</Col>
			</Row>
		</Grid>
	</div>
)


	export default Project

