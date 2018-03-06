import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Presentation.css'
import '../css/NextPage.css'

const Presentation = () => (
	<div className="Presentation" >

		<h1>Presentation</h1>

		<div className="typeWriterBg">
			<div className="typeWriter">
				<h4 className="animTypeWriter"> Cargouet Florian</h4> 
			</div>
			<div className="typeWriter">
				<h4 className="animTypeWriter2">Web Developpeur</h4> 
			</div>
		</div>

		<div className="blocPesentation">
			<p>Bonjour,  bienvenu sur mon
				site web. Je suis jeune
				 développeur web qui vous
				 propose un tas de struc lorem 
				ipsum dalgo dis la ronaise de 
				salami les chausson sec archi sec
				<br/><br/>
				Bonjour,  bienvenu sur mon
				site web. Je suis jeune
				 développeur web qui vous
				 propose un tas de struc lorem 
				ipsum dalgo dis la ronaise de 
				salami les chausson sec archi sec.
			</p>
		</div>

		<div className="NextPage">   
			<Link to='/Projects'> > </Link>  
		</div>
	</div>
	)

export default Presentation
