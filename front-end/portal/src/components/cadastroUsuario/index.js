import { useState } from "react";
import './style.css';


export default function CadastroUsuario(){
    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")
    const [email, setEmail] = useState("")
   
   

    async function handleAddUsuario(event){
        event.preventDefault()
        const data ={
            nome,
            senha,
            email
        }
        await fetch('https://hypeplaceapp.herokuapp.com/usuario/cadastrar',{
            method:'POST',
            headers:{
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        setNome("")
        setSenha("")
        setEmail("")
    }

    
    return(
        <div className="cadUsuario">
            <h2>Cadastra-se</h2>
            <form onSubmit={handleAddUsuario}>
                <input
                    required 
                    type="text" 
                    id="name" 
                    placeholder="Nome" 
                    value={nome}
                    onChange={(e)=>setNome(e.target.value)} 
                />
                <input
                    required 
                    type="email" 
                    id="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)} 
                />               
                <input
                    required 
                    type="password" 
                    id="senha" 
                    placeholder="Senha" 
                    value={senha}
                    onChange={(e)=>setSenha(e.target.value)} 
                />
                <button type="submit" className="btn">Cadastrar-se</button>
            </form>   

        </div>
    )
}