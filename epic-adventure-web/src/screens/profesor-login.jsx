import { Formulario } from '../components/Forms';
import { Profesor } from '../components/Profesor';
import { useState } from 'react';

function ProfesorLogin() {

  const[user, setUser] = useState ([])

  return (
    <div>
      {
        !user.length > 0
        ?<Formulario setUser={setUser}/>
        :<Profesor user={user} setUser={setUser}/>
      }
      
    </div>
  );
}

export default ProfesorLogin;
