import React, { useState } from "react";

export const Contador = () => {
  const [valor, setValor] = useState(0);

  const actualizarValor = (num: number) => {
    setValor(valor + num);
  };

  return (
    <div><br />
    <br />
      <h1>Acumulador <small>{valor}</small></h1>
      <button className="button" onClick={() => actualizarValor(5)}>  +5 </button>{' '}
      <button className="button"  onClick={() => actualizarValor(-5)}> -5 </button>
      
      <br />
        <br />
    </div>
  );
};
