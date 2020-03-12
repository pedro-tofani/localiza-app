import React from 'react';
import './About.css';

class AboutLocaliza extends React.Component {
  render() {
    return (
      <div className='container-about'>
        <h1>O que é a Localiza?</h1>
        <p>A Localiza é uma empresa de aluguel de veículos. É a maior do ramo na América Latina
          e uma das maiores do mundo considerando tamanho da frota e valor de mercado.</p>
        <p>O modelo de negócios é composto por:</p>
        <ul>
          <li>Aluguel de carros</li>
          <li>Venda de seminovos</li>
          <li>Gestão de frotas</li>
          <li>Franquias</li>
        </ul>
      </div >
    )
  }
}

export default AboutLocaliza;