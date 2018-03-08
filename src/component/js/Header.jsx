import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Header.css'
import {ProjectsInfos} from './Project.jsx'



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

 const projects = ProjectsInfos.map( (project) =>
  <li key={project.id}>
    <Link to={'/Projects#' + project.name.split(' ').join('-')} >{project.name}</Link> 
  </li>
)


const Header = () => (
    <header className="Header">
      <nav>
        <ul>
          <li><Link to='/Presentation'>Presentation</Link></li>
          <li>
            <Link to='/Projects'>Projects</Link> 
            <ul className="level2">
            {projects}
            </ul>
          </li>
          <li><Link to='/Contact'>Contact</Link></li>
        </ul>
      </nav>
    </header>
)

export default Header
