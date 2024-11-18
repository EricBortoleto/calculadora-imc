import React from 'react';
import './InfoIMC.css';

const InfoIMC = () => (
  <div className="info-imc">
    <h2>O que é o IMC?</h2>
    <p>
      O Índice de Massa Corporal (IMC) é uma medida usada para avaliar se uma
      pessoa tem um peso adequado em relação à sua altura. É calculado
      dividindo-se o peso pela altura ao quadrado. O IMC é utilizado como um
      indicador inicial de saúde, mas é importante lembrar que ele não leva em
      conta fatores como a composição corporal, distribuição de gordura ou
      condições de saúde específicas.
    </p>

    <h3>Como o IMC é interpretado?</h3>
    <p>
      O IMC é classificado em diferentes faixas, que ajudam a entender o estado
      geral de peso de uma pessoa. No entanto, ele não substitui uma avaliação
      médica completa, que considera vários outros aspectos da saúde. Veja
      abaixo como as faixas do IMC são interpretadas:
    </p>
    <ul>
      <li>
        <strong>Abaixo de 18,5:</strong> Indica que a pessoa está abaixo do peso
        recomendado, o que pode ser sinal de desnutrição ou outros problemas de
        saúde.
      </li>
      <li>
        <strong>18,5 a 24,9:</strong> Esta faixa é considerada saudável, onde o
        peso está em equilíbrio com a altura.
      </li>
      <li>
        <strong>25 a 29,9:</strong> Indica sobrepeso, que pode aumentar o risco
        de desenvolver condições de saúde, como diabetes tipo 2 e hipertensão.
      </li>
      <li>
        <strong>30 a 34,9:</strong> Classificação para obesidade grau 1, um
        risco mais elevado para doenças cardiovasculares e outras complicações.
      </li>
      <li>
        <strong>35 a 39,9:</strong> Obesidade grau 2, caracterizada por um risco
        ainda maior para doenças graves.
      </li>
      <li>
        <strong>Acima de 40:</strong> Obesidade grau 3, que apresenta riscos
        muito altos à saúde, frequentemente associada a comorbidades graves.
      </li>
    </ul>
  </div>
);

export default InfoIMC;
