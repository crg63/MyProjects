
import React from 'react'
import '../css/Contact.css'
import img from "../../img/phone-hand.png"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Contact extends React.Component {

	render() {
		return (

			<div className="Contact">
				<div className="BlockPrincipal">
					<h1> Contact</h1>
					<img src={img} />
					<form className="contactForm" action="https://formspree.io/floriancargouet@gmail.com" method="POST"> 
						<div>
							<div>
								<label>Last name</label>
								<input required className="formField" id="Lname" type="text" name="name" placeholder="Martin" />
							</div>

							<div>
								<label>First name</label>
								<input required className="formField" id="Fname" type="text" name="name" placeholder="Jean-Louis" />
							</div>

							<div>
								<label>Email</label>
								<input required className="formField" id="Fmail" name="_replyto" type="email" placeholder="jean-louis@mail.com" />
							</div>

							<div className="subject">
								<label>Subject</label>
								<textarea  required className="formField" cols="10" rows="2" componentClass="textarea" placeholder="Write your message" />
							</div>
							<div  className="submit">
								<button type="submit" value="Send"> <FontAwesomeIcon icon="paper-plane" className="paper-plane" /> Submit </button>
							</div>
		 
						</div>

					<div className="NextPage">   
						<Link to='/Projects'> {"<"} </Link>  
					</div>
					</form>
				</div>
			</div>
		);
	}
};

export default Contact
