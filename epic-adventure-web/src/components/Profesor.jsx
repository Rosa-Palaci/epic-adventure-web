export function Profesor({ user, setUser }) {
    const hadbleLogout = () =>{
        setUser([])
    }
    return(
        <div>
            <h1>Portal del Profesores</h1>
            <h1>Bienvenido {user}</h1>
            <button onClick={hadbleLogout}>Cerrar Sessión</button>
        </div>
    )
}