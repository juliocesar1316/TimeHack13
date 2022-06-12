import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import{ useState} from 'react'
import './style.css'

export default function Avaliar(){
    const [value, setValue] = useState(0);
    const [razaoSocial, setRazaoSocial] = useState("")
    const [local, setLocal] = useState("")
    const [descricao, setDescricao] = useState("")
    const [anonimo, setAnonimo] = useState(false)
    const [data, setData] = useState({})

    function handleSubmit(e){
        e.preventDefault()
        setData(
            {
                razaoSocial,
                local,
                descricao,
                anonimo,
                value
            }
        )
        console.log(data)

        setValue(0)
        setRazaoSocial("")
        setLocal("")
        setDescricao("")
        setAnonimo("")
    }

    return(
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="razaosocial">Nome do estabelecimento</label>
            <input 
            required 
            type="text" 
            id="razaosocial" 
            name="razaosocial" 
            value={razaoSocial}
            onChange={(e)=>setRazaoSocial(e.target.value)}
            />

            <label htmlFor="local">Localização</label>
            <input 
            required 
            type="text" 
            id="local" 
            name="local" 
            value={local}
            onChange={(e)=>setLocal(e.target.value)}
            />

            <Box component="fieldset" mb={3} borderColor="transparent" className="star">
                <Typography component="legend">Qual nota você daria para o local?</Typography>
                <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
            </Box>
            <div className="textarea">
                <label htmlFor="descricao">Conte-nos sobre sua experiência no local*</label>
                <textarea 
                name="descricao" 
                id="descricao" 
                cols="30" 
                rows="10"
                value={descricao}
                onChange={(e)=>setDescricao(e.target.value)}
                />
            </div>
            <div className="checkbox">
                <input 
                type="checkbox" 
                value={anonimo} 
                id="anonimo"
                onChange={(e)=>setAnonimo(e.target.value)}
                />
                <label htmlFor="anonimo">Publicar de forma anônima</label>
            </div>
            
            <button type="submit" className="button">Avaliar</button>
               
        </form>
        
    )
}