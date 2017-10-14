import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import App from './js/App'
import { HashRouter } from 'react-router-dom'
import registerServiceWorker from './js/registerServiceWorker'

ReactDOM.render((
	<HashRouter>
		<App/> 
	</HashRouter>
), document.getElementById('root'))

registerServiceWorker()
