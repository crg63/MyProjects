
import React from 'react'
import '../css/Contact.css'
import { Link } from 'react-router-dom'
import {  ControlLabel , FormControl, FormGroup,  Button, Grid, Row, Col, HelpBlock } from 'react-bootstrap'

// const Contact = () => (
// 	<div className="Contact">
// 		<Grid>
// 			<Row className="show-grid">
// 				<Col xs={10} xsOffset={1}>
// 					<div className="BlockPrincipal">
// 						<h2> Contact</h2>

// 						<form className="contactForm"> 
// 							<FormGroup>
// 								<ControlLabel>First name</ControlLabel>
// 								<FormControl className="formField" id="Lname" type="text" placeholder="Jean-Louis" />
// 							</FormGroup>
// 							<FormGroup>
// 								<ControlLabel>Name</ControlLabel>
// 								<FormControl className="formField" id="Fname" type="text" label="First Name" placeholder="Martin" />
// 							</FormGroup>

// 							<FormGroup>
// 								<ControlLabel>Email</ControlLabel>
// 								<FormControl className="formField" id="Fmail"	type="email" placeholder="jean-louis@mail.com" />
// 							</FormGroup>

// 							<FormGroup>
// 								<ControlLabel>Subject</ControlLabel>
// 								<FormControl className="formField" componentClass="textarea" placeholder="Write you're message"/>
// 							</FormGroup>

// 							<Button type="submit"> Submit </Button>
// 						</form>
// 					</div>
// 					<div className="NextPage">   
// 						<Link to='/Projects'> {"<"} </Link>  
// 					</div>
// 				</Col>
// 			</Row>
// 		</Grid>
// 	</div>
// )

// class Name extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {value: ''};
// 		console.log(props);
// 		this.handleChange = this.handleChange.bind(this);
// 	}

// 	handleChange(event) {
// 		console.log(event.target.value)
// 		this.setState({value: event.target.value});
// 	}

// 	handleSubmit(event) {
// 		alert('A name was submitted: ' + this.state.value);
// 		event.preventDefault();
// 	}

// 	render() {
// 		return (
// 		<FormGroup>
// 			<ControlLabel>Last name</ControlLabel>
// 			<FormControl className="formField" id="Lname" value={this.state.value} onChange={this.handleChange} type="text" placeholder="Jean-Louis" />
// 		</FormGroup>
// 		);
// 	}
// }

class Contact extends React.Component {
	constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

	render() {
		return (

			<div className="Contact">
				<Grid>
				<Row className="show-grid">
					<Col xs={10} xsOffset={1}>
						<div className="BlockPrincipal">
							<h2> Contact</h2>

							<form className="contactForm" action="https://formspree.io/floriancargouet@gmail.com" method="POST"> 

								<FormGroup validationState={this.getValidationState()}>
									<ControlLabel>Last name</ControlLabel>
									<FormControl className="formField" id="Lname" value={this.state.value} onChange={this.handleChange} type="text" name="name" placeholder="Jean-Louis" />
									<FormControl.Feedback />
         							<HelpBlock>Validation is based on string length.</HelpBlock>
								</FormGroup>

								<FormGroup>
								<ControlLabel>Email</ControlLabel>
								<FormControl className="formField" id="Fmail" name="_replyto"	type="email" placeholder="jean-louis@mail.com" />
								</FormGroup>

								<FormGroup>
								<ControlLabel>Subject</ControlLabel>
								<FormControl className="formField" componentClass="textarea" placeholder="Write you're message" />


								</FormGroup>

								<Button type="submit" value="Send"> Submit </Button>
							</form>
						</div>
						<div className="NextPage">   
							<Link to='/Projects'> {"<"} </Link>  
						</div>
					</Col>
				</Row>
				</Grid>
			</div>
			);
	}
};

export default Contact
