import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import PokemonCard from '../components/PokemonCard';
import axios from 'axios';
import Footer from '../components/Footer';
import data from '../components/data.js'

  function Pokedex() {
    const [pokeData, setPokeData] = useState([]);
    const [filteredPokemons, setFilteredPokemons] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    
  
  // const [status, setStatus] = useState("loading");
  

  // async function fetchData(search, filter) {
  
  //   try {
  //     const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
  //     setPokeData(response.data.results);
  //     setStatus("success");
  //   } catch (err) {
  //     setPokeData([]);
  //     setStatus("failed")
  //     window.alert("something went wrong!, please retry");
  //   }
  // }

  useEffect(() => {
    const storedData = localStorage.getItem('data');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setPokeData(parsedData);
      // console.log('Stored Data:', parsedData); 
      setFilteredPokemons(parsedData);
    // console.log('filteredPokemons:', parsedData); 
    }
  }, []);
  // useEffect(() => {
  //   fetchData("", "");
  //   // console.log(pokeData.data)
  // }, [])

// console.log(filteredPokemons);
const handleSearchAndFilters = (query, filters) => {
  setSearchQuery(query);
  const updatedFilteredPokemons = pokeData.filter(pokemon => {
  
    const matchesSearch = pokemon.name.toLowerCase().includes(query.toLowerCase());

    
    const matchesType = filters.types.length === 0 || filters.types.includes(pokemon.type.toLowerCase());

    
    const attack = filters.attack;
    const matchesAttack = (attack === 'below100' && pokemon.attack < 100) ||
      (attack === '100to200' && pokemon.attack >= 100 && pokemon.attack <= 200) ||
      (attack === 'above200' && pokemon.attack > 200) ||
      attack === '';

    
    const experience = filters.experience;
    const matchesExperience = (experience === 'below100' && pokemon.experience < 100) ||
      (experience === '100to200' && pokemon.experience >= 100 && pokemon.experience <= 200) ||
      (experience === 'above200' && pokemon.experience > 200) ||
      experience === '';

    return matchesSearch && matchesType && matchesAttack && matchesExperience;
  });

  setFilteredPokemons(updatedFilteredPokemons);
};


return (
  <div>
   <SearchBar onSearchAndFilters={handleSearchAndFilters} />
      <PokemonCard pokemon={filteredPokemons} />
  </div>
);
}
 
  export default Pokedex;
