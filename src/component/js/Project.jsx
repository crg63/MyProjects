import React from 'react'
import { Link } from 'react-router-dom'
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
	<div className="Project" id={project.key}>
		<h3>{project.name}</h3>
		<p>{project.description}</p>
		<a href={project.link} target="_blank"> <img src={project.img} alt="Web site" /> </a>
	</div>
)


const Project = () => (
	<div className="Projects">
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


	export default Project

