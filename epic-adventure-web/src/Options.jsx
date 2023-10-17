import { Link } from 'react-router-dom';
import './App.css';

const links = [
  {
    name:"Estudiante",
    href:"/estudiante"
  },
  {
    name:"Profesor",
    href:"/profesor",
  },

];

const Options = () => {
  return (
    <div>
      {links.map((x, index) => (
        <Link key={index} to={x.href}>
          <button>{x.name}</button></Link>
      ))}
    </div>
  );
};

export default Options;
