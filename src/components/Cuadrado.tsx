import React, { useState } from 'react';

export const Cuadrado = () => {
  const [lado, setLado] = useState(0);
  const [areaCalculada, setAreaCalculada] = useState<number | null>(null);

  const area = (numero: number): number => {
    return numero * numero;
  };

  const manejarCambio = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nuevoLado = parseFloat(event.target.value);
    setLado(isNaN(nuevoLado) ? 0 : nuevoLado);
  };

  const calcularArea = () => {
    const calculo = area(lado);
    setAreaCalculada(calculo);
  };

  return (
    <div>
        <br />
        <br />
      <h1>Área de un cuadrado</h1>
      <label>
        Ingrese la medida de un lado del cuadrado:
        <input type="text" value={lado} onChange={manejarCambio} />
      </label><br />
      <button onClick={calcularArea}>Calcular Área</button>
      {areaCalculada !== null && (
        <span>El área de tu cuadrado es {areaCalculada}</span>
      )}<br />
      <br />
    </div>
  );
};
