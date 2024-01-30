import './App.css';
import { Cuadrado } from './components/Cuadrado';
import { Parametros } from './components/Parametros';
import { Divididos } from './components/Divididos';
import { Contador } from './components/Contador';
import { Alumnos } from './components/Alumnos';


function App() {
  return (
    <div>
      <h1>EJERCICIOS TYPESCRIPT - REACT</h1>
      <h1 className='nombre'>Nombre: </h1><p className='nombre'>Richard Quinaucho</p><br />
      <h1 className='nombre'>Carrera:  </h1><p className='nombre'>Desarrollo de Software</p><br />
      <h1 className='nombre'>Asignatura:   </h1><p className='nombre'>APLICACIONES MOVILES I </p><br />
        <br />
      <hr />
      <Cuadrado />
      <hr />
      <Parametros />
      <hr />
      <Divididos />
      <hr />
      <Alumnos />
      <hr />
      <Contador />
    </div>
  );
}

export default App;
