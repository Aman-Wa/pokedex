import React from 'react';
import '../Styling/PopupCard.css';

const PopupCard = ({ pokemon, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          &#10005; 
        </button>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.img} alt={pokemon.name} />
        <p>Attack: {pokemon.attack}</p>
        <p>Defense: {pokemon.defense}</p>
        <p>Type: {pokemon.type}</p>
        <p>Experience: {pokemon.experience}</p>
      </div>
    </div>
  );
};

export default PopupCard;
