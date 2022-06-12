import { Rating } from '@material-ui/lab';
import './style.css'

export default function CardMelhor(){
    
    const dados =[
        {
            img:'./assets/bestQuality-img1.svg',
            selo:true,
            title:"Vapor 82",
            avaliacao:100
        },
        {
            img:'./assets/bestQuality-img2.svg',
            selo:true,
            title:"Arena Show Bar",
            avaliacao:100
        },
        {
            img:'./assets/bestQuality-img3.svg',
            selo:true,
            title:"Léo Chopp",
            avaliacao:100
        },
        {
            img:'./assets/bestQuality-img4.svg',
            selo:true,
            title:"Seu Regueira",
            avaliacao:80
        },
    ]
     
    return(
        <div className='container'>
            <p className="titleCard">Melhores avaliados</p>
            <div className='containerCard'>
                {dados.map(item=>(
                    <div className="card" key={item.img}>
                        <img src={item.img} alt={item.tilte} className="background" />
                        {item.selo && <img src="./assets/selo.png" className="selo" alt="selo"/>}
                        <div className="title">
                            <p>{item.title}</p>
                            <Rating name="read-only" value={(item.avaliacao/10/2)} readOnly />
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}