import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Presentation from '../component/js/Presentation'
import ProjectsWrap from '../component/js/Projects'
import Contact from '../component/js/Contact'
import Header from '../component/js/Header'
import Footer from '../component/js/Footer'

class Main  extends Component {
	render() {
		return (
			<main>
				<Header />
				<Switch>
					<Route exact path='/' component={Presentation}/>
					<Route path='/Presentation' component={Presentation}/>
					<Route path='/Projects' component={ProjectsWrap}/>
					<Route path='/Contact' component={Contact}/>
				</Switch>
				<Footer />
			</main>
			);
	}
}

export default Main
