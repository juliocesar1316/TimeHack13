import CardMelhor from "../../cardMelhor";
import CardProx from "../../cardProximo";
import CardAlta from "../../cardsAlta";
import "./style.css"

export default function SegundaSection(){
    return(
        <div className="second-section">
            <div className="titleSection">
                <h2>Encontre seu próximo destino</h2>
                <h3>Lorem lorem lorem</h3>
            </div>
            <div className="cards">
                <CardAlta/>
                <CardMelhor/>
                <CardProx/>
            </div>
            
        </div>
    )
}