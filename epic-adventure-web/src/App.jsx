import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className='container'>
      <div className='principal'>
        <div className='title'>
          <h1>¡Bienvenido a esta nueva aventura!</h1>
        </div>
        <div className='instructions'>
          <h2>Selecciona tu tipo de usuario</h2>
        </div>
      </div> 
      <div className='options'>
        <button>Estudiante</button>
        <button>Profesor</button>
      </div>
      
    </div>
    
     
    
  )
}

export default App
