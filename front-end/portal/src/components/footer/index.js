import './style.css'
import{Link} from 'react-router-dom'
export default function Footer() {
    return(
        <div className="footer">
            <div className="itensFooter">
                <div className="logoFooter">
                    <img src="./assets/logo.svg" alt="Logo" />
                    <p>Seu proximo hype</p>
                </div>
                <div className="redes">
                    <p>Nos siga nas redes</p>
                    <div className="icons-redes">
                        <img src="./assets/icon-insta.svg" alt="icon Insta" />
                        <img src="./assets/icon-face.svg" alt="icon face" />
                        <img src="./assets/icon-twitter.svg" alt="icon twitter" />
                        <img src="./assets/icon-linkedin.svg" alt="icon linkedin" />
                    </div>
                </div>
                <div className="contato">
                    <label htmlFor="">Inscreva-se para receber novidades</label>
                    <input type="text" placeholder="Digite seu melhor email"/>
                    <Link to="/"><button>Cadastra-se</button></Link>
                </div>
            </div>
            <p className="copyright">©2021 Todos os direitos reservados pela Rainbow</p>
        </div>
    )
}