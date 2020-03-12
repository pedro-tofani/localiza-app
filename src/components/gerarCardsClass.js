import React from 'react';
import { Link } from 'react-router-dom';
import './gerarCardClass.css';

class GeraCard extends React.Component {
  obrigatedFeature(value, feature) {
    return (
      <div className='container-details'>
        <img className='icon' src={require(`../images/${feature}`)} alt={feature} height='20px' />
        <div>{value}</div>
      </div>
    )
  }

  optionalFeature(value, feature) {
    if (value) {
      return (
        <div className='container-details'>
          <img className='icon' src={require(`../images/${feature}`)} alt={feature} height='20px' />
          <div>{feature}</div>
        </div>
      )
    }
  }

  render() {
    const { cars } = this.props
    console.log(cars)
    return (
      <div className='container-cards'>
        {cars.map(car => (
          <div className='container-car-card' key={car.carClass}>
            <div>
              <Link className='link-carro' to={{
                pathname: `/CarClass/${car.carClass}`,
                state: {
                  car,
                }
              }}> <h1>{car.carClass}</h1></Link>
              <div class='img-container'>
                <img src={require(`../${car.imageClass}`)} alt={car.carClass} height='150px' />
              </div>
            </div>
            <div className='container-details-row'>
              <div>
                <h2>Características do grupo:</h2>
              </div>
              <div className='container-infos'>
                {this.obrigatedFeature(car.carClassCharacteristcs.doors, 'door')}
                {this.obrigatedFeature(car.carClassCharacteristcs.passengers, 'passengers')}
                {this.optionalFeature(car.carClassCharacteristcs.air, 'Ar-condicionado')}
                {this.optionalFeature(car.carClassCharacteristcs.airBag, 'Air Bag')}
                {this.obrigatedFeature(car.carClassCharacteristcs.direction, 'direction')}
                {this.obrigatedFeature(car.carClassCharacteristcs.gear, 'gear.svg')}
                {this.optionalFeature(car.carClassCharacteristcs.abs, 'ABS')}
              </div>
            </div>
          </div>
        ))
        }
      </div>
    )
  }
}

export default GeraCard;