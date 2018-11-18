import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Presentation.css'
import '../css/NextPage.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs, faMobileAlt, faTabletAlt, faDesktop, faBrain, faComments, faCode, faEnvelope, faAt} from '@fortawesome/free-solid-svg-icons'
library.add(faCogs, faMobileAlt, faTabletAlt, faDesktop, faBrain, faComments, faCode, faEnvelope, faAt)

class Presentation extends React.Component {
	componentDidMount() {
		var d = document.querySelectorAll(".Intro")		
		var timer = setInterval(function(){
			d[0].classList.toggle("lightUp");
		}, 8500);
	}

	render() {
		return (
			<section className="Presentation" >
				<section className="Intro">
					<div className="typewriter"> 
						<h1>Création de Newsletter et de site internet</h1>
					</div>
					<div className="typewriter2"> 
						<p>Une idée ? Un projet ? <br /><a href="https://site-web-france.herokuapp.com/contact">contacter moi</a> !</p>
					</div>
				</section> 
				<div className="Competence">
					<div>
						<div className="icone">
							<FontAwesomeIcon icon="envelope" className="envelope"/>
							<FontAwesomeIcon icon="at" className="at"/>
						</div>
						<section>
							<h1> Créer une newsletter  </h1>
							<p>
								Une Newsletter marketing vous est profitable pour développer votre clientèle ainsi que pour fidéliser vos clients. 
								La Newsletter aussi appelé email marketing ou emailing est complémentaire à votre site web. Vous pouvez organiser des ventes promotionnelles,
								augmenter le trafic de votre site internet, avoir une publicité personnalisée...
							</p>
						</section>
					</div>
					<div>
						<div className="icone">
							<FontAwesomeIcon icon="mobile-alt" className="mobile-alt"/>
							<FontAwesomeIcon icon="tablet-alt" className="tablet-alt"/>
							<FontAwesomeIcon icon="desktop" className="desktop"/>
						</div>
						<section>
							<h1>Créer un site internet</h1>
							<p>
								La création de site web permet d'obtenir une vitrine pour votre activité. 
								C'est une publicité partout 24h/24 et 7j/7. 
								C'est avoir la possibilitée d'augmenter ça visibilité suivant la localisation de votre choix. 
								La création d'un site internet est nécessaire pour la prospérité de votre activité dans le monde, en France ou dans votre ville.
							</p>
						</section>
					</div>
					<div>
						<div className="icone">
							<FontAwesomeIcon icon="cogs" className="cogs"/>
						</div>
						<section>
							<h1>Maintenance site</h1>
							<p>
								Vous avez déjà un site mais il se fait vieux ? 
								Nous pouvons le remettre à neuf. 
								La création d’un site internet est un invisstissement sur le long terme. 
								Un site web doit être maintenu et mis à jour régulièrement pour des raisons de sécurité, de visibilité...
								Comme pour une maison plus votre site restera sans maintenance plus il y aura du travail.
							</p>
						</section>
					</div>
				</div>
				<section className="Description">
					<h1> Développeur web / Intégrateur emailing freelance </h1>
					<p>  
						Je vous proposes mes compétances de développeur intégrateur web. <br /> 
						Vous voulez créer un site internet ? Mettre en avant votre activitée à l'aide de newsletter ? <br /> 
						Ou vous avez un besoin de main d'oeuvre pour un projet ? 	<br /> 
						Je suis disponible pour vos projets d'équipe ou pour de plus petits projets.
					</p>
				</section>
				<div className="Competence">
					<div>
						<div className="icone">
							<FontAwesomeIcon icon="comments" className="comments"/>
						</div>
						<section>
							<h2> Un freelance attentif à vos attentes. </h2>
							<p>
								 Je mets mes compétences à votre service. 
								 Ma diponibilité et mon dynamisme permettront de réaliser le site internet ou la newsletter que vous souhaitez. 
								 Vous benificierez d'un suivi régulier et de conseils pour votre projet.
							</p>
						</section>
					</div>
					<div>
						<div className="icone">
							<FontAwesomeIcon icon="code" className="code"/>
						</div>
						<section>
							<h2> Code review et optimisation de code </h2>
							<p>
								La revue de code permet d'optimiser le temps de chargment de la page de votre site internet. 
								Permet d'augmenter la délivrabilité de vos emailing. 
								La qualité est essentielle, un audit de code pour prévenir plutot que de guèrir. 
							</p>
						</section>
					</div>
					<div>
						<div className="icone">
							<FontAwesomeIcon icon="brain" className="brain"/>
						</div>
						<section>
						<h2> Site internet ergonomique <br />Newsletter engageante </h2>
							<p>
							Une conception de newsletters adaptées à vos campagnes emailing et à vos lecteurs.  Un site inernet simple d'utiliation et intuitif.  Nous  trouvons ensemble des solutions efficaces. 
							</p>
						</section>
					</div>

				</div>
				<div className="NextPageBlock">
					<div className="NextPage">   
						<Link to='/Projects'> > </Link>  
					</div>
				</div>
			</section>
		)
	}
}

export default Presentation
