import React from 'react'

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

/*class BtnClap extends React.Component {
	constructor(props) {
		super(props)
		this.state = {applose: 0}
		this.MoreApplose = this.MoreApplose.bind(this);

		}

		MoreApplose() {
			const newApplose = this.state.applose += 1
			newApplose.toString()
			this.setState({applose: newApplose})
		}

		render() {
		return (
		  <div>
		  	<p> {this.applose} </p>
		    <button onClick={this.MoreApplose}>
				<img src={require("../../img/y.png")} /> 
			</button>
		  </div>
		);
	}
}*/


export const Projects = ProjectsInfos.map( (project) => 
	<div className="Project" key={project.id}  id={project.name.split(' ').join('-')}>
		<div>
			<a href={project.link} target="_blank"> <img src={project.img} alt="Web site" /> </a>
			<button type="submit" value="Send" className="btnInfo" >+ Plus d'info </button>
		</div>
		<div>
			<div>
				<p>{project.name}</p>
				<p>{project.description}</p>
				<div>
					{/*	<BtnClap onClick={this.MoreApplose} />*/}
					<p> 12 </p>
					<button type="submit" value="Send" className="btnInfo" ><img src={require("../../img/y.png")} /> </button>
				</div>
			</div>
		</div>
	</div>
)