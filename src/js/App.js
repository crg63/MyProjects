import React from 'react'
import Main from './Main.jsx'
import '../css/App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faPaperPlane, faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faPaperPlane, faStroopwafel)

const App = () => (
  <div>
    <Main />
  </div>
)

export default App