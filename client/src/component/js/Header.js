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

document.addEventListener("DOMContentLoaded", () => {
	var barsMenu = document.querySelector(".bars")
	var header = document.querySelector(".Header")
	barsMenu.addEventListener('click', () => {
		header.classList.toggle('active')
	})
	if (window.matchMedia("(max-width: 767px)").matches) {
		var projectMenu = document.querySelector(".elmParentLevel2")
		projectMenu.addEventListener('click', () => {
			projectMenu.classList.toggle('active')
		})
		console.log('ok');
	}
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
									<Link to={'/Projects#pluspresdesoi'} > 
										pluspresdesoi
									</Link>
								</li>
								<li>
									<Link to={'/Projects#internaxx'} >  
										internaxx 
									</Link>
								</li>
								<li>
									<Link to={'/Projects#e-messagers'} >  
										e-messagers
									</Link>
								</li>
								<li>
									<Link to={'/Projects#donsms'} >  
										donsms
									</Link>
								</li>
								<li>
									<Link to={'/Projects#accelerateurs-victoires'} >  
										accelerateurs-victoires
									</Link>
								</li>
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
