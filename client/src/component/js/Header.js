import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/Header.css'




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

// const projectsList = ProjectsInfos.map( (project) =>
// 	<li key={project.id}>
// 	<Link to={'/Projects#' + project.name.split(' ').join('-')} >{project.name}</Link> 
// 	</li>
// 	)


class Header extends React.Component {


	render() {
		return (
			<header className="Header">
				<FontAwesomeIcon icon="bars" className="bars" />
				<nav>
					<ul>
						<li>
							<Link to='/Presentation'>Presentation</Link>
						</li>
						<li className="elmParentLevel2">
							<Link to='/Projects'>Projects</Link> 
							<ul className="level2">
								<li>
									<Link to={'/Projects#pluspresdesoi.fr'} > 
										pluspresdesoi.fr
									</Link>
								</li>
								<li>
									<Link to={'/Projects#internaxx.com'} >  
										internaxx.com 
									</Link>
								</li>
								{/*<li>
									<Link to={'/Projects#lokae.com'} >  
										lokae.com
									</Link>
								</li>*/}
							</ul>
						</li>
						<li>
							<Link to='/Contact'>Contact</Link>
						</li>
					</ul>
				</nav>
			</header>
			)
		}
	}

	export default Header
