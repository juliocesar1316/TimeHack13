import Header from "../../components/header";
import Footer from "../../components/footer";
import Avaliar from "../../components/conteudoAvaliar";
import './style.css'

function Avaliacao() {
   return (
      <div className="avaliacao">
         <Header tag="aval"/>
         <div className="sectionAvaliar">
            <img src="./assets/background-avaliar.svg" alt=""/>
            <div className="titleAvaliar">
               <h1>Frequentou algum lugar? <br/>Avalie!</h1>
               <p>Preencha o formulário e nos envie sua avaliação</p>
            </div>
            <Avaliar/>
         </div>
         <Footer/>
      </div>
   );
}

export default Avaliacao;
