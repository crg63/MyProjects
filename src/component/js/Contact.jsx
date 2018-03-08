
import React from 'react'
import '../css/Contact.css'
import { Link } from 'react-router-dom'

class Contact extends React.Component {


	render() {
		return (

			<div className="Contact">

				<div className="BlockPrincipal">
					<h1> Contact</h1>

					<form className="contactForm" action="https://formspree.io/floriancargouet@gmail.com" method="POST"> 

						<div>
							<label>Last name</label>
							<input className="formField" id="Lname" type="text" name="name" placeholder="Martin" />
						</div>

						<div>
							<label>First name</label>
							<input className="formField" id="Fname" type="text" name="name" placeholder="Jean-Louis" />
						</div>

						<div>
						<label>Email</label>
						<input className="formField" id="Fmail" name="_replyto"	type="email" placeholder="jean-louis@mail.com" />
						</div>

						<div>
						<label>Subject</label>
						<input className="formField" componentClass="textarea" placeholder="Write you're message" />


						</div>

						<button type="submit" value="Send"> Submit </button>
					</form>
				</div>
				<div className="NextPage">   
					<Link to='/Projects'> {"<"} </Link>  
				</div>
			</div>
		);
	}
};

export default Contact
