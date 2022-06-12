import { Rating } from '@material-ui/lab';
import{ useState} from 'react'
import './style.css'

export default function ConteudoBuscar(){
    const [input, setInput] = useState('');

    
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
        avaliacao:100
    },
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
    }, {
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
       <> 
            <div className="busca">
                <input type="text" value={input} onChange={(e)=> setInput(e.target.value)}/>
                <img src="./assets/icon-pesquisa.svg" alt="icon pesquisa" />
            </div>
            
            <div className='containerCardBusca'>
                {dados.filter(x=>{
                    if(input.length > 2 && input!== 'selo'){
                        return(
                            x.title === input
                        ) 
                    }else if(input === 'selo'){
                        return x.selo === true
                    }else{
                        return x.title !== input
                    }}).map(item=>(
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
        </> 
    )
}