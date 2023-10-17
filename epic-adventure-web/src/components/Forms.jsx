import '../styles/Forms.css'
import { useState } from 'react'

export function Formulario({ setUser }){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(name === "" || email === "" || password === ""|| !isValidEmail(email)){
            setError(true)
            return
        }

        setError(false)

        setUser([name])
    }

    const isValidEmail = (email) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return emailRegex.test(email);
      }

    return(
        <section>
            <h1>Bienvenido, Profesor</h1>

            <form 
            className='forms'
            onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder='Nombre'
                value={name}
                onChange={e => setName(e.target.value)} 
                />
                <input 
                type="text"
                placeholder='Correo electrónico'
                value={email}
                onChange={e => setEmail(e.target.value)} 
                />
                <input 
                type="password" 
                placeholder='Contraseña'
                value={password}
                onChange={e => setPassword(e.target.value)} 
                />
                <button className='Login'>Login</button>
            </form>
            {error && !isValidEmail(email) && <p>*Correo electrónico no válido.</p>}
            {error && <p>*Todos los campos son obligatorios.</p>}
        </section>
    )
}