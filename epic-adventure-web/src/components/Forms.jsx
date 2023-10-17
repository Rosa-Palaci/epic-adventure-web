import '../styles/Forms.css'
import { useState } from 'react'

export function Formulario({ setUser }){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(name === "" || email === "" || password === ""){
            setError(true)
            return
        }

        setError(false)

        setUser([name])
    }

    return(
        <section>
            <h1>Bienvenido, Profesor</h1>

            <form 
            className='forms'
            onSubmit={handleSubmit}>
                <input 
                type="text"
                value={name}
                onChange={e => setName(e.target.value)} 
                />
                <input 
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)} 
                />
                <input 
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)} 
                />
                <button></button>
            </form>
            {error && <p>*Todos los campos son obligatorios.</p>}
        </section>
    )
}