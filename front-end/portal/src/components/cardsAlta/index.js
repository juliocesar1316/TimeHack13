import { Rating } from '@material-ui/lab';
import './style.css'

export default function CardAlta(){
    
    const dados =[
        {
            img:'./assets/alta-img1.svg',
            selo:true,
            title:"Seu Regueira",
            avaliacao:100
        },
        {
            img:'./assets/alta-img2.svg',
            selo:true,
            title:"Seu Pereira",
            avaliacao:100
        },
        {
            img:'./assets/alta-img3.svg',
            selo:true,
            title:"Barchef",
            avaliacao:100
        },
        {
            img:'./assets/alta-img4.svg',
            selo:false,
            title:"Big House",
            avaliacao:80
        },
    ]
     
    return(
        <div className='container'>
            <p className="titleCard">Em Alta</p>
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