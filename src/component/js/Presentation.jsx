import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Presentation.css'
import '../css/NextPage.css'

const Presentation = () => (
	<div className="Presentation" >

		<h2>Presentation</h2>

		<div className="typeWriter">
			<h4 className="animTypeWriter"> Cargouet Florian</h4> 
		</div>

		<div className="typeWriter">
			<h4 className="animTypeWriter2">Web Developpeur</h4> 
		</div>

		<div className="blocPesentation">
			<p>Welcome to my world, I present myself, I am Cargouet Florian, a junior developer JavaScript. Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
			ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
			ipsum ipsum ipsum ipsu
			</p>
		</div>

		<div className="NextPage">   
			<Link to='/Projects'> > </Link>  
		</div>
	</div>
	)

export default Presentation
