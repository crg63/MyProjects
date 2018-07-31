import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Presentation from '../component/js/Presentation.js'
import ProjectsWrap from '../component/js/Project.js'
import Contact from '../component/js/Contact.js'
import Header from '../component/js/Header.js'
// import ReactGoogleAuth from '../component/js/google.js'


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
  	<Header />
    <Switch>
      <Route exact path='/' component={Presentation}/>
  		<Route path='/Presentation' component={Presentation}/>
  		<Route path='/Projects' component={ProjectsWrap}/>
  		<Route path='/Contact' component={Contact}/>
    </Switch>
  </main>
)

export default Main
