import React from 'react';
import GerarCarAvailable from './gerarCarAvailable';

class CarClass extends React.Component {
  render() {
    const { carClass, availableCars } = this.props.location.state.car;
    return (
      <div>
        <h1 className='borda'>{carClass}</h1>
        <h2 className='borda'>Carros disponíveis:</h2>
        <GerarCarAvailable carsAvailable={availableCars} />
      </div>
    )
  }
}

export default CarClass;