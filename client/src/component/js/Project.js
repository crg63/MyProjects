import React from 'react'
import SkyLight from 'react-skylight'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faEye} from '@fortawesome/free-solid-svg-icons'
library.add(faPlusCircle, faEye)

class Project extends React.Component {
	componentDidMount() {
		document.querySelector(".Projects").style.height = 'initial'
	}

	render() {
		return (
			<div className="Project" id={this.props.data.name}>
				<div className="imgProject">
					<a href={this.props.data.link} target="_blank"> <img src={this.props.data.img} alt="Web site" /> </a>
					<button onClick={() => this.simpleDialog.show()} className="btnInfo" > En savoir <FontAwesomeIcon icon="plus-circle" className="plus-circle"/> </button>
					<SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title={this.props.data.name}>
			         {this.props.data.description}
			        </SkyLight>
				</div>
				<div className="infoProject">
					<div>
						<a href={this.props.data.link} target="_blank"> <p className="titleProject">{this.props.data.name} <FontAwesomeIcon icon="eye" className="eye"/></p> </a>
						<p>Réalisé avec: {this.props.data.avec}</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Project
