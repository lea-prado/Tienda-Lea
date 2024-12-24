import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#home">Inicio</a></li>
        <li className="navbar-item"><a href="#productos">Productos</a></li>
        <li className="navbar-item"><a href="#nosotros">Nosotros</a></li>
        <li className="navbar-item"><a href="#contacto">Contacto</a></li>
      </ul>
      <CartWidget /> {/* Aquí se renderiza el ícono del carrito */}
    </nav>
  );
};

export default NavBar;
