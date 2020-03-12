import React from 'react';
import GerarCardsClass from './gerarCardsClass';
const dataApi = require('../dataAPI');

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    dataApi.getCars().then((cars) => {
      this.setState({ cars })
    })
  }

  render() {
    const { cars } = this.state
    if (!cars) return <div>Loading...</div>
    return (
      <div>
        <GerarCardsClass cars={cars} />
      </div>
    )
  }
}

export default Content;