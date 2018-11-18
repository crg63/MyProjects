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
					<img src={img} />
					<form className="contactForm" action="https://formspree.io/floriancargouet@gmail.com" method="POST"> 
						<div>
							<div>
								<label>Nom / Prénom *</label>
								<input required className="formField" id="Lname" type="text" name="name" placeholder="Musk" />
							</div>

							<div>
								<label>Téléphone</label>
								<input className="formField" type="tel" placeholder="0667975717" />
							</div>

							<div>
								<label>Email *</label>
								<input required className="formField" id="Fmail" name="_replyto" type="email" placeholder="elon.musk@spacex.com" />
							</div>

							<div className="subject">
								<label>Sujet *</label>
								<textarea  required className="formField" name="message" cols="10" rows="2" componentClass="textarea" placeholder="Ecrivez votre message" />
							</div>
							<div  className="submit">
								<button type="submit" value="Send"> <FontAwesomeIcon icon="paper-plane" className="paper-plane" /> Envoyer </button>
							</div>
							<input type="hidden" name="_language" value="fr" />
							<input type="hidden" name="_next" value="http://www.site-web-france.com/#/Contact" />
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
