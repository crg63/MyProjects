import React from 'react'
import '../css/Contact.css'
import {  ControlLabel , FormControl, Button, Grid, Row, Col} from 'react-bootstrap'

const Contact = () => (
	<div className="Contact">
		<h2 className="banner"> Contact</h2>
		<Grid>
			<Row className="show-grid">
				<Col xs={10} xsOffset={1}>
					<form className="contactForm"> 
						<ControlLabel>First name</ControlLabel>
						<FormControl id="Lname" type="text" placeholder="Jean-Louis" />

						<ControlLabel>Name</ControlLabel>
						<FormControl id="Fname" type="text" label="First Name" placeholder="Martin" />

						<ControlLabel>Email</ControlLabel>
						<FormControl id="formControlsEmail"	type="email" placeholder="jean-louis@mail.com" />

						<ControlLabel>Subject</ControlLabel>
						<FormControl componentClass="textarea" placeholder=""/>

						<Button type="submit"> Submit </Button>
					</form>
				</Col>
			</Row>
		</Grid>
	</div>
)

export default Contact
