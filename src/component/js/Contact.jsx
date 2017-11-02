import React from 'react'
import '../css/Contact.css'
import { Link } from 'react-router-dom'
import {  ControlLabel , FormControl, FormGroup,  Button, Grid, Row, Col} from 'react-bootstrap'

const Contact = () => (
	<div className="Contact">
		<Grid>
			<Row className="show-grid">
				<Col xs={10} xsOffset={1}>
					<div className="BlockPrincipal">
						<h2> Contact</h2>
					
						<form className="contactForm"> 
							<FormGroup>
								<ControlLabel>First name</ControlLabel>
								<FormControl className="formField" id="Lname" type="text" placeholder="Jean-Louis" />
							</FormGroup>
							<FormGroup>
								<ControlLabel>Name</ControlLabel>
								<FormControl className="formField" id="Fname" type="text" label="First Name" placeholder="Martin" />
							</FormGroup>

							<FormGroup>
								<ControlLabel>Email</ControlLabel>
								<FormControl className="formField" id="Fmail"	type="email" placeholder="jean-louis@mail.com" />
							</FormGroup>

							<FormGroup>
								<ControlLabel>Subject</ControlLabel>
								<FormControl className="formField" componentClass="textarea" placeholder="Write you're message"/>
							</FormGroup>

							<Button type="submit"> Submit </Button>
						</form>
					</div>
					<div className="NextPage">   
						<Link to='/Projects'> {"<"} </Link>  
					</div>
				</Col>
			</Row>
		</Grid>
	</div>
)

export default Contact
