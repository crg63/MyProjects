import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col} from 'react-bootstrap'
import '../css/Presentation.css'
import '../css/NextPage.css'

const Presentation = () => (
  <div className="Presentation" >
  	<Row className="show-grid">
      <Col xs={10} xsOffset={1}>
        <div className="BlockPrincipal">
          <h2>Presentation</h2>
          
          <span className="typeWriter">
            <h4 className="line-1 anim-typewriter"> Cargouet Florian Web Developpeur  </h4>
          </span>

        	<div className="blocPesentation">
            <p>Welcome to my world, I present myself, I am Cargouet Florian, a junior developer JavaScript. Lorem ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
  					ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum
  				 	ipsum ipsum ipsum ipsu
  				  </p>
          </div>

          <div className="NextPage">   
            <Link to='/Projects'> > </Link>  
          </div>
        </div>
      </Col>
    </Row>
  </div>
)

export default Presentation
