import './style.css'
import{Link} from 'react-router-dom'
export default function PrimeiraSection(){
    return(
        <div className="first-section">
            <div className="content">
                <h1>Viva a cidade do seu jeito!</h1>
                <p>Os melhores estabelecimentos LGBTQIA+ friendly. Encontre avaliações já feitas por outras pessoas para saber se o lugar merece o seu brilho.</p>
                <Link to="/"><button>Cadastra-se</button></Link>
            </div>
            <div className="imgInferior">
                <img src="./assets/people-section-top.svg" alt="people" />
            </div>
        </div>
    )
}