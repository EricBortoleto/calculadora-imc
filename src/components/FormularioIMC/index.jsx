import React from 'react';
import './FormularioIMC.css';

function FormularioIMC({ altura, setAltura, peso, setPeso, calcularIMC }) {
  return (
    <div className="formulario">
      <label className="label">
        Altura (cm):
        <input
          type="number"
          value={altura}
          onChange={e => setAltura(e.target.value)}
          className="input"
        />
      </label>
      <label className="label">
        Peso (kg):
        <input
          type="number"
          value={peso}
          onChange={e => setPeso(e.target.value)}
          className="input"
        />
      </label>
      <button onClick={calcularIMC}>Calcular IMC</button>
    </div>
  );
}

export default FormularioIMC;
