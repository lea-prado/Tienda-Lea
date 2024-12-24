import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  // Simulación de productos
  const productos = [
    { id: 1, nombre: 'Producto A', precio: '$100', descripcion: 'Descripción del Producto A' },
    { id: 2, nombre: 'Producto B', precio: '$150', descripcion: 'Descripción del Producto B' },
    { id: 3, nombre: 'Producto C', precio: '$200', descripcion: 'Descripción del Producto C' },
  ];

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <p>Aquí puedes explorar nuestros productos y servicios.</p>
      <div className="product-list">
        {productos.map((producto) => (
          <div key={producto.id} className="product-card">
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <p><strong>{producto.precio}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
