import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Presentation.css'
import '../css/NextPage.css'

class Presentation extends React.Component {
	render() {
		return (
			<div className="Presentation" >

			<h1>Presentation</h1>

			{
				// Mettre une image de ma tête
			}

			<div className="typeWriterBg">
			<div className="typeWriter">
			<h4 className="animTypeWriter"> Cargouet Florian</h4> 
			{
				// h4 à changer
			}
			</div>
			<div className="typeWriter">
			<h4 className="animTypeWriter2">Web Developpeur</h4> 
			</div>
			</div>
			<div className="blocPesentation">
			<p> 

			{
					// Proposer une partie site web, une partie email et une partie autre
				}
				Descrption bientôt disponible. 
				Post haec indumentum regale quaerebatur et ministris fucandae purpurae tortis confessisque pectoralem tuniculam sine manicis textam, Maras nomine quidam inductus est ut appellant Christiani diaconus, cuius prolatae litterae scriptae Graeco sermone ad Tyrii textrini praepositum celerari speciem perurgebant quam autem non indicabant denique etiam idem ad usque discrimen vitae vexatus nihil fateri conpulsus est.
				Post haec indumentum regale quaerebatur et ministris fucandae purpurae tortis confessisque pectoralem tuniculam sine manicis textam, Maras nomine quidam inductus est ut appellant Christiani diaconus, cuius prolatae litterae scriptae Graeco sermone ad Tyrii textrini praepositum celerari speciem perurgebant quam autem non indicabant denique etiam idem ad usque discrimen vitae vexatus nihil fateri conpulsus est.
				Maost haec indumentum regale quaerebatur et ministris fucandae purpurae tortis confessisque pectoralem tuniculam sine manicis textam larc istris fucandae purpurae.



				{/*Développeur web, employé et auto-entrepreuneur,
				je vous proposes mes compétances. 

				Créer un site web

				Vous voulez créer un site ? Mettre en avant votre activitée ?
				Ou vous avez un besoin de main d'oeuvre pour un projet ?
				Je suis disponible, pour vos projets d'équipe ou pour de plus petits projets.
				
				Pour votre entreprise il est important d'avoir une présence sur le web.
				Cela vous rends disponibe, vous avez la possibiliter d'être contacté, de proposer vos services ou de montrer votre activité 24h sur 24h.
				Votre site sur mesure adapter à votre activitée sera disponible sur mobile tabelette et ordinateur partout et tout le temps.
				
				Vous avez déjà un site mais il se fait vieux ? Nous allons le remettre à neuf je vous proposes maintenance ou migration de votre site sur les technologies les plus récentes et modernes.
				
				Mes points fort: 
				- Des technologies moderne et adapter à votre activitée
				- 
				- La qualité du travail made in France
				- Mon invisstissement dans votre projet
				- Mes services pas cher, à bas prix.


				<br/><br/>
				Email marketing

				Je créer vos emails marketing, responsive et compatible avec tout les services mails. */}

				</p>
				</div>
					<div className="NextPageBlock">
						<div className="NextPage">   
							<Link to='/Projects'> > </Link>  
						</div>
					</div>
				</div>
				)
			}
		}

		export default Presentation
