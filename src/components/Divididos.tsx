
export const Divididos = () => {
  const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];


  const nuevoArreglo = arreglo.map((valor) => valor / 5);

  return (
    <div><br />
    <br />
      <h1>Arreglo Dividido por 5</h1>
      <p>Arreglo original: {JSON.stringify(arreglo)}</p>
      <p>Arreglo dividido por 5: {JSON.stringify(nuevoArreglo)}</p><br />
        <br />
    </div>
  );
};


