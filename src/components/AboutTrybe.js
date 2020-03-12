import React from 'react';
import trybe from '../images/trybe.png';
import './About.css';

class AboutTrybe extends React.Component {
  render() {
    return (
      <div className='container-about'>
        <h1>O que é a <img src={trybe} alt='Trybe' height='25px' />?</h1>
        <p>A trybe é uma escola do futuro, baseado no modelo "ganha-ganha" onde a pessoa só começa a
      pagar quando estiver recebendo, no mínimo, R$ 3.500,00 por mês.</p>
        <p>Com um programa de aprendizagem de alta qualidade, mentorias individuais e muitos
          desafios práticos, somos a escola do futuro e para o futuro que acelera sua carreira
      em desenvolvimento de software em aproximadamente 12 meses.</p>
        <p>O currículo é composto por:</p>
        <ul>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
          <li>Node</li>
          <li>Express.js</li>
          <li>SQL</li>
          <li>Git</li>
        </ul>
      </div>
    )
  }
}

export default AboutTrybe;