import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Welcome from './components/welcome'
import Options from './Options'
import StudentLogin from './screens/student-login';
import ProfesorLogin from './screens/profesor-login';


function App() {

  return (
    <div >
      <Welcome />
      
      <Router>
        <Options />
        <Routes>
          <Route path='/estudiante' element={<StudentLogin/>}/>
          <Route path='/profesor' element={<ProfesorLogin/>}/>
        </Routes>
      </Router>
      
      
    </div>
    
  )
}

export default App
