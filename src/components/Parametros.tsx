import React, { useState } from 'react';

export const Parametros = () => {
  interface SumaElementosProps {
    arreglo: number[];
  }

  const sumaElementos: React.FC<SumaElementosProps> = ({ arreglo }) => {
    const suma = arreglo.reduce((num: number, nume: number) => num + nume, 0);
    return (
      <div>
        <p>La suma de los elementos ingresados es: {suma}</p>
      </div>
    );
  };

  const [numeros, setNumeros] = useState<string>('');
  const [arregloNumeros, setArregloNumeros] = useState<number[]>([]);

  const manejarCambio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumeros(event.target.value);
  };

  const agregarNumero = () => {
    const nuevoNumero = parseFloat(numeros.replace(',', '.'));
    if (!isNaN(nuevoNumero)) {
      setArregloNumeros([...arregloNumeros, nuevoNumero]);
      setNumeros('');
    }
  };

  return (
    <div>
      <h1>Parámetros</h1>
      <label>
        Ingrese un número:
        <input type="text" value={numeros} onChange={manejarCambio} />
      </label>
      <button onClick={agregarNumero}>Agregar Número</button>
      {arregloNumeros.length > 0 && (
        <>
          <p>Números ingresados: {arregloNumeros.join(', ')}</p>
          {sumaElementos({ arreglo: arregloNumeros })}
        </>
      )}
    </div>
  );
};