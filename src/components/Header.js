import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../images/logo.jpeg';

class Header extends React.Component {
  render() {
    return (
      <div className='header-content'>
        <img src={logo} alt="logo" height='65px' />
        <nav>
          <Link to="/"><li>Início</li></Link>
          <Link to="/localiza"><li>Sobre a Localiza</li></Link>
          <Link to="/trybe"><li>Sobre a Trybe</li></Link>
        </nav >
      </div >
    )
  }
}

export default Header;