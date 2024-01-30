
interface Alumno {
  name: string;
  edad: number;
  calificacion: number;
}

const alumnos: Alumno[] = [
  {
    name: 'Viviana',
    edad: 19,
    calificacion: 10,
  },
  {
    name: 'Wendy',
    edad: 20,
    calificacion: 8,
  },
  {
    name: 'Gerson',
    edad: 18,
    calificacion: 9,
  }
];

const calcularPromedio = (alumnos: Alumno[]): number => {
  const totalCalificaciones = alumnos.reduce((acc, alumno) => acc + alumno.calificacion, 0);
  const promedio = totalCalificaciones / alumnos.length;
  return promedio;
}

export const Alumnos = () => {
  const promedioCalificaciones = calcularPromedio(alumnos);

  return (
    <div className="container"><br />
    <br />
      <h1>Promedio de Calificaciones de Alumnos</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Calificación</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno, index) => (
            <tr key={index}>
              <td>{alumno.name}</td>
              <td>{alumno.edad}</td>
              <td>{alumno.calificacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p >El promedio de calificaciones es: {promedioCalificaciones}</p><br />
        <br />
    </div>
  );
};

export default Alumnos;
