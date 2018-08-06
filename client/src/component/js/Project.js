import React from 'react'

var applose = 0

class BtnClap extends React.Component {
	constructor(props) {
			super(props)
			this.state = {applose: this.props.applose}
			this.MoreApplose = this.MoreApplose.bind(this);
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

			

class Project extends React.Component {
	render() {
		return (

			<div className="Project" id={this.props.data.name}>
				<div>
					<a href={this.props.data.link} target="_blank"> <img src={this.props.data.img} alt="Web site" /> </a>
					<button type="submit" value="Send" className="btnInfo" >+ Plus d'info </button>
					{console.log("props",this.props)}
				</div>
				<div>
					<div>
						<p>{this.props.data.name}</p>
						<p>{this.props.data.pour} <br/><br/> {this.props.data.avec}</p>
						<p></p>
						<BtnClap onClick={this.MoreApplose} applose={this.props.data.apploseNb} />	
					</div>
				</div>
			</div>
		)
	}
}

export default Project
