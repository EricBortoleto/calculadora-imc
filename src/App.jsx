import React, { useState } from 'react';
import FormularioIMC from './components/FormularioIMC';
import ResultadoIMC from './components/ResultadoIMC';
import InfoIMC from './components/InfoIMC';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const alturaMetros = parseFloat(altura.replace(',', '.'));
    const pesoKg = parseFloat(peso.replace(',', '.'));

    if (alturaMetros && pesoKg) {
      const imcCalculado = (pesoKg / (alturaMetros * alturaMetros)).toFixed(2);
      setImc(imcCalculado);
      definirClassificacao(imcCalculado);
    } else {
      alert('Por favor, insira valores válidos para altura e peso.');
    }
  };

  const definirClassificacao = imc => {
    if (imc < 18.5) setClassificacao('Abaixo do peso');
    else if (imc >= 18.5 && imc < 24.9) setClassificacao('Peso normal');
    else if (imc >= 25 && imc < 29.9) setClassificacao('Sobrepeso');
    else if (imc >= 30 && imc < 34.9) setClassificacao('Obesidade grau 1');
    else if (imc >= 35 && imc < 39.9) setClassificacao('Obesidade grau 2');
    else setClassificacao('Obesidade grau 3');
  };

  return (
    <div className="app-container">
      <h1>Calculadora de IMC</h1>
      <FormularioIMC
        altura={altura}
        setAltura={setAltura}
        peso={peso}
        setPeso={setPeso}
        calcularIMC={calcularIMC}
      />
      {imc && <ResultadoIMC imc={imc} classificacao={classificacao} />}

      <InfoIMC />

      <footer className="footer">
        <p>
          Desenvolvido por{' '}
          <a
            href="https://github.com/EricBortoleto"
            target="_blank"
            rel="noopener noreferrer"
          >
            Eric Bortoleto
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
