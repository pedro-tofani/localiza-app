import React from 'react';
import './gerarCarAvailable.css';

class GerarCarAvailable extends React.Component {

  handleClick = (e) => {
    const { value } = e.target;
    alert(`Você acaba de alugar o ${value}`);
  }

  render() {
    const { carsAvailable } = this.props;
    return (
      <div className='cars-available'>
        {carsAvailable.map(car => (
          <div className='card-car' key={car.id}>
            <h3>{car.name}</h3>
            <img src={require(`../${car.image}`)} alt={car.name} className='img-carro' />
            <button value={car.name} onClick={this.handleClick}>Alugar com um click!</button>
          </div>
        ))
        }
      </div>
    )
  }
}

export default GerarCarAvailable;