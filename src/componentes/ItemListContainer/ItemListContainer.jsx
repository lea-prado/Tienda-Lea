import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <p>Aquí puedes explorar nuestros productos y servicios.</p>
    </div>
  );
};

export default ItemListContainer;
