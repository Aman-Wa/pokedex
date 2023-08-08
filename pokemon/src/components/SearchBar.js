import React , {useEffect, useState } from 'react';
import '../Styling/SearchBar.css' ;
import axios from 'axios';
import Fuse from 'fuse.js'; 




function SearchBar({data}) {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    const fuse = new Fuse(data, {
      keys: ['name', 'description'],
    });
  
    const handleSearch = (event) => {
      const value = event.target.value;
      setSearchTerm(value);
  
      if (value === '') {
        setSearchResults([]);
      } else {
        const results = fuse.search(value);
        setSearchResults(results.map((result) => result.item));
      }
    };

  return (
    <div className="search">
      <div className="label">
      <h1 className="element-pokemons-for-you">
        <span className="text-wrapper">800 </span>
        <span className="span">Pokemons</span>
        <span className="text-wrapper"> for you to choose your favorite</span>
      </h1>
    </div>
    <div className="search-bar" style={{ margin: '0 176px' }}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul className="search-results">
        {searchResults.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default SearchBar
