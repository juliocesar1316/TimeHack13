import './style.css'
export default function SegundaSection(){
    return(
        <div className="containerSobre">
            <h1>Sobre a gente</h1>
            <div className="textSobre">
                <p>
                    Os lugares com as melhores avaliações recebem um Selo de Aliado HypePlace. 
                    Isso quer dizer que a comunidade LGBTQIA+ se uniu, avaliou muito e escolheu o comércio como um dos melhores e mais seguros da cidade. Ai que emoção! 

                    Os lugares com as melhores avaliações recebem um Selo de Aliado HypePlace / Rainbow Place. 
                    Isso quer dizer que a comunidade LGBTQIA+ se uniu, avaliou muito e escolheu o comércio como um dos melhores e mais seguros da cidade. Ai que emoção! 
                </p>
                <p>
                    essa forma ajudamos outras POCs a frequentarem os lugares certos, se jogando, batendo cabelo e curtindo muito sem medo de ser feliz! Aloca!
                </p>
            </div>
            <h2>Fale com a gente!</h2>
            <div className="contatoSobre">
                <div className="cel">
                    <img src="./assets/icon-cel.svg" alt="icon-cel" />
                    <p>(43) 3337-5008</p>
                </div>
                <div className="carta">
                    <img src="./assets/icon-carta.svg" alt="icon-carta" />
                    <p>rainbow_place@gmail.com</p>
                </div>
                <div className="whats">
                    <img src="./assets/icon-whats.svg" alt="icon-whats" />
                    <p>(43) 98767-6924</p>
                </div>
                <div className="local">
                    <img src="./assets/icon-local.svg" alt="icon-local" />
                    <p>Rua Gerônimo Gouveia 172, Centro. Londrina, PR.</p>
                </div>
            </div>
        </div>
    )
}