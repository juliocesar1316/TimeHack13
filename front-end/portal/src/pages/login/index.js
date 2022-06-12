import CadastroUsuario from "../../components/cadastroUsuario";
import Header from "../../components/header";
import Footer from "../../components/footer";
import LoginSite from "../../components/login";
import './style.css'

function Login() {
    return (
       <div className="containerLogin">
            <Header/>
            <div className="sectionLogin">
                <div className="titleLogin">
                    <h1>Fique por dentro dos lugares com selo LGBTQAI+ Friendly</h1>
                    <p>Ao continuar, você estará concordando com os Termos de Uso e a Política de Privacidade do Rainbow Place</p>
                </div>
                <div className="login-cad" >
                    <CadastroUsuario/>
                    <LoginSite/>
                </div>
            </div>
            <Footer/>
       </div>
    );
 }
 
 export default Login;
 