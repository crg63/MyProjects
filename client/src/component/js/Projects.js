import React from 'react'

var applose = 0
export const ProjectsInfos = [
	{ 
		id: 1,
		name: "pluspresdesoi.fr",
		avec: "Réaliser avec: Lorem ipsum",
		pour: "Réaliser pour: Lorem ipsum",
		description: "Lorem ipsum du Lorem ipsum du Lorem ipsum Lorem ipsum." ,
		img: require('../../img/ppds.png'),
		link: "http://www.pluspresdesoi.fr",
		apploseNb: applose
	},
	{
		id: 2,
		name: "lokae.com",
		avec: "Réaliser avec: Lorem ipsum",
		pour: "Réaliser pour: Lorem ipsum",
		description: "Lorem ipsum du Lorem ipsum du Lorem ipsum Lorem ipsum.",
		img: require('../../img/ppds.png'),
		link: "http://www.pluspresdesoi.fr",
		apploseNb: applose
	},	
	{
		id: 3,
		name: "internaxx.com",
		avec: "Réaliser avec: Lorem ipsum",
		pour: "Réaliser pour: Lorem ipsum",
		description: "Lorem ipsum du Lorem ipsum du Lorem ipsum Lorem ipsum.",
		img: require('../../img/ppds.png'),
		link: "http://www.pluspresdesoi.fr",
		apploseNb: applose
	}
]


class BtnClap extends React.Component {
	constructor(props) {
			super(props)
			this.state = {applose}
			this.MoreApplose = this.MoreApplose.bind(this);
		}

		componentDidMount() {
			// console.log(JSON.stringify(ProjectsInfos));
		}

		MoreApplose() {
			var newApplose = this.state.applose + 1
			this.setState({applose: newApplose})
			// console.log(this.state.applose)
			// console.log(ProjectsInfos[0].apploseNb)
		}



		render() {
		return (
		  <div className="btnClap">
		  	<p> {this.state.applose} </p>
		    <button onClick={this.MoreApplose}>
				<img src={require("../../img/y.png")} /> 
			</button>
		  </div>
		);
	}
}


export const Projects = ProjectsInfos.map( (project) => 
	<div className="Project" key={project.id}  id={project.name.split(' ').join('-')}>
		<div>
			<a href={project.link} target="_blank"> <img src={project.img} alt="Web site" /> </a>
			<button type="submit" value="Send" className="btnInfo" >+ Plus d'info </button>
		</div>
		<div>
			<div>
				<p>{project.name}</p>
				<p>{project.avec} <br/><br/> {project.pour}</p>
				<p>{}</p>
				<BtnClap onClick={this.MoreApplose} />	
			</div>
		</div>
	</div>
)