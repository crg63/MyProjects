import React from 'react'

var nbOfComponentMounted = -1

class BtnClap extends React.Component {
	// constructor(props) {
	// 		super(props)
	// 		this.state = {applose: this.props.applose}
	// 		this.MoreApplose = this.MoreApplose.bind(this);
	// 	}

	// componentDidMount() {
	// 	fetch("https://api.mlab.com/api/1/databases/projects/collections/projects?f={%22apploseNb%22:%201}&apiKey=fF9iSxFIZA8zMgnrw9eNdbLGakDxQx1V", {method: 'GET'})
	// 	.then(res => res.json())
	// 	.then(data => {
	// 		nbOfComponentMounted += 1
	// 		if (nbOfComponentMounted === data.length) {
	// 			nbOfComponentMounted = 0
	// 		}
	// 		this.setState({ applose: 0 })
	//   });
	// 	}

	// MoreApplose() {
	// 	// var newApplose = this.state.applose + 1
	// 	// this.setState({applose: newApplose})
	// 	fetch('/clicked', {method: 'POST'})
	// 	.then(function(response) {
	// 		if(response.ok) {
	// 			console.log('click was recorded');
	// 			return;
	// 		}
	// 		throw new Error('Request failed.');
	// 	})
	// 	.catch(function(error) {
	// 		console.log(error);
	// 	});

	// 	setInterval(function() {
	// 		fetch('/clicks', {method: 'GET'})
	// 		.then(function(response) {
	// 			if(response.ok) return response.json();
	// 			throw new Error('Request failed.');
	// 		})
	// 		.then(function(data) {
	// 			document.getElementById('counter').innerHTML = `Button was clicked ${data.length} times`;
	// 		})
	// 		.catch(function(error) {
	// 			console.log(error);
	// 		});
	// 	}, 1000);
	// }

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
	componentDidMount() {
		document.querySelector(".Projects").style.height = 'initial'
	}

	render() {
		return (

			<div className="Project" id={this.props.data.name}>
				<div className="imgProject">
					<a href={this.props.data.link} target="_blank"> <img src={this.props.data.img} alt="Web site" /> </a>
					{/*<button type="submit" value="Send" className="btnInfo" >+ Plus d'info </button>*/}
					{/*<p id="counter"> </p> */}
				</div>
				<div className="infoProject">
					<div>
						<a href={this.props.data.link} target="_blank"> <p className="titleProject">{this.props.data.name}</p> </a>
						<p>Réalisé avec: {this.props.data.avec}</p>
						<p></p>
						{/*<BtnClap onClick={this.MoreApplose} applose={this.props.data.apploseNb} />	*/}
					</div>
				</div>
			</div>
		)
	}
}

export default Project
