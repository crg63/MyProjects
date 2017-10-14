import React from 'react'
import { Link } from 'react-router-dom'
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



const UpDownMenu = () => {
  let header = document.querySelector('header nav');
  header.classList.toggle("UpDownMenu")
}

const Header = () => (
    <header className="Header">
      <nav>
        <ul>
          <li><Link to='/Presentation'>Presentation</Link></li>
          <li>
            <Link to='/Projects'>Projects</Link> 
            <ul>
              <li> <Link to='/Projects/1'>Project one</Link> </li>
            </ul>
          </li>
          <li><Link to='/Contact'>Contact</Link></li>
        </ul>
      </nav>
        <span className="circle"  onClick={UpDownMenu} ><img src={require('../../img/digi.png')} alt="Open close menu" /> </span>
    </header>
)

export default Header
