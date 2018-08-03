import React from 'react'

var applose = 0

class BtnClap extends React.Component {
	constructor(props) {
			super(props)
			this.state = {applose}
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

			

class Projects extends React.Component {
		 state = {
		    response: ''
		  };

	componentDidMount() {
		 // this.callApi()
	      // .then(res => this.setState({ response: res.express }))
	      // .catch(err => console.log(err));
  				fetch("/data/projects")
				.then(res=>res.json())
				.then((data)=> {
					console.log(data);
					this.setState({response: data.express})
				})
	}

	// callApi = async () => {
 //    const response = await fetch('/api/hello');
 //    const body = await response.json();

 //    if (response.status !== 200) throw Error(body.message);

 //    	return body;
 //  	}



	render() {
		return (

			<div className="Project" key={"5"}  id={"5"}>
				<div>
					<a href={"5"} target="_blank"> <img src={"5"} alt="Web site" /> </a>
					<button type="submit" value="Send" className="btnInfo" >+ Plus d'info </button>
				</div>
				<div>
					<div>
						<p>{"desd"}</p>
						<p>{} <br/><br/> {'ur'}</p>
						<p>{}</p>
						<BtnClap onClick={this.MoreApplose} />	
					</div>
				</div>
			</div>
		)
	}
}

export default Projects
