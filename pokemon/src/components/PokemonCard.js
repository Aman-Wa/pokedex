import React, { useState } from 'react';
import '../Styling/PokemonCard.css'

const Card = ({ title, imageUrl, spec1, spec2 }) => (
    <div className="card">
      <div className="card-content">
        <div className="card-text">
          <h2>{title}</h2>
          <p>Attack: {spec1}</p>
          <p>Defense: {spec2}</p>
        </div>
        <div className="card-image">
          <img src={imageUrl} alt={title} />
        </div>
      </div>
    </div>
  );
  

const CardRow = ({ cards }) => (
  <div className="card-row">
    {cards.map((card, index) => (
      <Card key={index} title={card.name} imageUrl={card.sprites.front_default} spec1={card.base_experience} spec2={card.weight}/>
    ))}
  </div>
);

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="pagination">
    {Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index}
        onClick={() => onPageChange(index + 1)}
        className={currentPage === index + 1 ? 'active' : ''}
      >
        {index + 1}
      </button>
    ))}
  </div>
);

const PokemonCard = ({pokemon,loading,infoPokemon}) => {

  const itemsPerPage = 9;
  const totalPages = Math.ceil(pokemon.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleCards = pokemon.slice(startIndex, endIndex);

  const rows = [];
  for (let i = 0; i < visibleCards.length; i += 3) {
    
    rows.push(visibleCards.slice(i, i + 3));
  }

  return (
    <div className="app">
     
      {rows.map((row, index) => (
        <CardRow key={index} cards={row} />
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PokemonCard;