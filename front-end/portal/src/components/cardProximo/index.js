import { Rating } from '@material-ui/lab';
import './style.css'

export default function CardProx(){
    
    const dados =[
        {
            img:'./assets/next-img1.svg',
            selo:false,
            title:"Fome de Quê",
            avaliacao:40
        },
        {
            img:'./assets/next-img2.svg',
            selo:false,
            title:"Sky Bar",
            avaliacao:80
        },
        {
            img:'./assets/next-img3.svg',
            selo:false,
            title:"Boysinho Bar",
            avaliacao:80
        },
        {
            img:'./assets/next-img4.svg',
            selo:false,
            title:"Gota Serena",
            avaliacao:60
        },
    ]
     
    return(
        <div className='container'>
            <p className="titleCard">Próximos a você</p>
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