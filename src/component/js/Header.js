import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Header.css'
import {ProjectsInfos} from './Projects.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



// The Header creates links that can be used to navigate
// between routes.


// const test = () => {
//   let IdRoot = document.querySelector('#root')
//   let Presentation = document.querySelector('.Presentation')
	
//   document.addEventListener('DOMContentLoaded'), () => {
//     if (IdRoot.contains(Presentation)) {
//       console.log('ok')
//     }
//   }
// }

// test()

document.addEventListener("DOMContentLoaded", function(event) {
	var barsMenu = document.querySelector(".bars")
	var header = document.querySelector(".Header")
	barsMenu.addEventListener('click', () => {
		header.classList.toggle('active')
	})

})

 const projectsList = ProjectsInfos.map( (project) =>
	<li key={project.id}>
		<Link to={'/Projects#' + project.name.split(' ').join('-')} >{project.name}</Link> 
	</li>
)


const Header = () => (
		<header className="Header">
		 <FontAwesomeIcon icon="bars" className="bars" />
			<nav>
				<ul>
					<li><Link to='/Presentation'>Presentation</Link></li>
					<li className="elmParentLevel2">
						<Link to='/Projects'>Projects</Link> 
						<ul className="level2">
						{projectsList}
						</ul>
					</li>
					<li><Link to='/Contact'>Contact</Link></li>
				</ul>
			</nav>
		</header>
)

export default Header
