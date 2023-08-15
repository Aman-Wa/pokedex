import React, { useState } from 'react';
import '../Styling/SearchBar.css';

const SearchBar = ({ onSearchAndFilters }) => {
  const [searchInput, setSearchInput] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedAttack, setSelectedAttack] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');

  const handleSearchChange = event => {
    setSearchInput(event.target.value);
  };

  const handleTypeFilterChange = event => {
    setSelectedTypes(Array.from(event.target.selectedOptions, option => option.value));
  };

  const handleAttackFilterChange = event => {
    setSelectedAttack(event.target.value);
  };

  const handleExperienceFilterChange = event => {
    setSelectedExperience(event.target.value);
  };

  const handleSearchAndFilters = () => {
    const filters = {
      types: selectedTypes,
      attack: selectedAttack,
      experience: selectedExperience
    };
    onSearchAndFilters(searchInput, filters);
  };
  

  return (
    <div style={{display:"flex",}}>
     <p style={{textAlign:"center",fontSize:"3rem"}}>800 <span style={{fontWeight:"bolder"}}>pokemons</span> for you to choose from your favourite</p>
    <div className="search-filter">
     
      <input className='search-input'
        type="text"
        placeholder="Search Pokémon"
        value={searchInput}
        onChange={handleSearchChange}
      />
      <div className="filter-options">
        <label>Type:</label>
        <select  onChange={handleTypeFilterChange}>
        <option value="">Any</option>
          <option value="electric">Electric</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
        </select>
      </div>
      <div className="filter-options">
        <label>Attack:</label>
        <select onChange={handleAttackFilterChange}>
          <option value="">Any</option>
          <option value="below100">Below 100</option>
          <option value="100to200">100 to 200</option>
          <option value="above200">Above 200</option>
        </select>
      </div>
      <div className="filter-options">
        <label>Experience:</label>
        <select onChange={handleExperienceFilterChange}>
          <option value="">Any</option>
          <option value="below100">Below 100</option>
          <option value="100to200">100 to 200</option>
          <option value="above200">Above 200</option>
        </select>
      </div>
      <button onClick={handleSearchAndFilters}>Apply Filters</button>
    </div>
    </div>
  );
};

export default SearchBar;
