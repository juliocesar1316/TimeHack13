import './style.css'
import{Link} from 'react-router-dom'

export default function Header({tag}){
    
    function handleClick(e){
        window.localStorage.removeItem("logado")
    }
    
    return(
        <div className="header">
            <Link to="/home"><img src="./assets/logo.svg" alt=""/></Link>
            <div className="menu">
                <div className="itensMenu">
                    <Link to="/avaliacao" className={tag === 'aval' ? 'select' : ''}>Avaliar</Link>
                    <Link to="/buscar"className={tag === 'buscar' ? 'select' : ''}>Buscar</Link>
                    <Link to="/sobre"className={tag === 'sobre' ? 'select' : ''}>Sobre</Link>
                </div>
                <div className="login">
                    <Link to="/" className="log">Login</Link>
                    <Link to="/" className="cadastrar" onClick={handleClick}>Cadastrar</Link>
                </div>
            </div>
        </div>
    )
}