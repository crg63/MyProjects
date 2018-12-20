import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import '../css/Footer.css'

class Footer extends React.Component {
	render() {
		return (
			<footer className="Footer">
					<ul>
						<li>
							<a href="http://site-web-france.com/Presentation"> Présentation </a>
						</li>
						<li>
							<a href="http://site-web-france.com/Projects"> Mes réalisations </a>
						</li>
						<li>
							<a href="http://site-web-france.com/contact"> Contact </a>
						</li>
					</ul>
					<ul>
						<li> © 2018 - Florian Cargouet  </li>|
						<li> <a href="http://localhost:3000/CGU">Mention légale </a> </li>
					</ul>
			</footer>
		)
	}
}

export default Footer
