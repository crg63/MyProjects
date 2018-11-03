import React from 'react'
import SkyLight from 'react-skylight'
import Clap from './Clap.js'

var nbOfComponentMounted = -1

class BtnClap extends React.Component {

}

class Project extends React.Component {
	componentDidMount() {
		document.querySelector(".Projects").style.height = 'initial'
	}

	render() {
		return (

			<div className="Project" id={this.props.data.name}>
				<div className="imgProject">
					<a href={this.props.data.link} target="_blank"> <img src={this.props.data.img} alt="Web site" /> </a>
					<button onClick={() => this.simpleDialog.show()} className="btnInfo" >+ Plus d'info </button>
					<SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title={this.props.data.name}>
			         {this.props.data.description}
			        </SkyLight>
					{/*<p id="counter"> </p> */}
				</div>
				<div className="infoProject">
					<div>
						<a href={this.props.data.link} target="_blank"> <p className="titleProject">{this.props.data.name}</p> </a>
						<p>Réalisé avec: {this.props.data.avec}</p>
						<p></p>
						{/*<BtnClap onClick={this.MoreApplose} applose={this.props.data.apploseNb} />	*/}
						{/*<Clap onClick={this.MoreApplose} applose={this.props.data.apploseNb} />*/}
					</div>
				</div>
			</div>
		)
	}
}

export default Project
