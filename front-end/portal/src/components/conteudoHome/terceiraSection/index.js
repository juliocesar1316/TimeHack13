import'./style.css'
import{Link} from 'react-router-dom'

export default function TerceiraSection(){
    return(
        <div className="terceira-section">
            <h2>Sobre o selo LGBTQAI+Friendly</h2>
            <div className="seloDescricao">
                <img src="./assets/seloMaior.png" alt="selo" />
                <div className="descricao">
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <Link to="/sobre">Saiba Mais </Link>
                </div>
                
            </div>
        </div>
    )
}