import React from 'react'
import { Link } from 'react-router-dom'
import Project from './Project.js'
import '../css/Projects.css'

class ProjectsWrap extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		  data: null,
		};
	  }

	componentDidMount() {
		var projectTab = []
		 fetch("/data/projects")
	  .then(response => response.json())
	  .then(data => {
			this.setState({ data })
			console.log(this.state.data.projects);
			for (var i = this.state.data.projects.length - 1; i >= 0; i--) {
				const projects = <Project key={this.state.data.projects[i].id} data={this.state.data.projects[i]}  />
				projectTab.push(projects)
				this.setState({projectsComponents: projectTab})
			}

	  });
	}

	render() {
		return (
			<div className="Projects" id="Projects">
				<div className="BlockPrincipal">
					<h1 className="banner">Projects</h1>
					{this.state.projectsComponents}
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

