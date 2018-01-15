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

const UpDownMenu = () => {
      document.querySelector('.circle').addEventListener('click', () => {
      document.querySelector('#root').classList.toggle('MenuDeep')      
  })
}

const Header = () => (
    <header className="Header">
      <nav>
        <ul>
          <li><Link to='/Presentation'>Presentation</Link></li>
          <li>
            <Link to='/Projects'>Projects</Link> 
            <ul>
            {projects}
            </ul>
          </li>
          <li><Link to='/Contact'>Contact</Link></li>
        </ul>
      </nav>
        <span className="circle"  onClick={UpDownMenu} ><img src={require('../../img/digi.png')} alt="Open close menu" /> </span>
    </header>
)

export default Header
