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
    // const [typeFilters, setTypeFilters] = useState([]);
    // const [attackFilter, setAttackFilter] = useState('');
    // const [experienceFilter, setExperienceFilter] = useState('');
  
  // const [status, setStatus] = useState("loading");
  // const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
  // const [nextUrl, setNextUrl] = useState();
  // const [prevUrl, setPrevUrl] = useState();
  // const [pokeDex, setPokeDex] = useState();
 
  

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
      console.log('Stored Data:', parsedData); 
      setFilteredPokemons(parsedData);
    // console.log('filteredPokemons:', parsedData); 
    }
  }, []);
  
  
  
 
  const handleSearchAndFilters = (query) => {
    setSearchQuery(query);
    if (query === '') {
      setFilteredPokemons(pokeData); 
    } else {
      const updatedFilteredPokemons = pokeData.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredPokemons(updatedFilteredPokemons);
    }
  };
  

  // const pokeFun = async () => {
  //   setLoading(true)
  //   const res = await axios.get(url);
  //   setNextUrl(res.data.next);
  //   setPrevUrl(res.data.previous);
  //   getPokemon(res.data.results)
  //   setLoading(false)
  // }
  // const getPokemon = async (res) => {
  //   res.map(async (item) => {
  //     const result = await axios.get(item.url)
  //     setPokeData(state => {
  //       state = [...state, result.data]
  //       state.sort((a, b) => a.id > b.id ? 1 : -1)
  //       return state;
  //     })
  //   })
  // }
  // useEffect(() => {
  //   pokeFun();
  //   console.log(pokeData);
  // }, [url])

  // useEffect(() => {
  //   fetchData("", "");
  //   // console.log(pokeData.data)
  // }, [])

// console.log(filteredPokemons);

//   useEffect(() => {
//     applyFilters();
//   }, [typeFilters, attackFilter, experienceFilter, searchQuery]);

//   const applyFilters = () => {
//     let updatedFilteredPokemons = pokeData;

//     // Apply type filter
//     if (typeFilters.length > 0) {
//       updatedFilteredPokemons = updatedFilteredPokemons.filter(pokemon =>
//         typeFilters.some(type => pokemon.type.toLowerCase() === type.toLowerCase())
//       );
//     }

//     // Apply attack filter
//     if (attackFilter !== '') {
//       const minAttack = parseInt(attackFilter, 10);
//       updatedFilteredPokemons = updatedFilteredPokemons.filter(pokemon =>
//         pokemon.attack >= minAttack
//       );
//     }

//     // Apply experience filter
//     if (experienceFilter !== '') {
//       const minExperience = parseInt(experienceFilter, 10);
//       updatedFilteredPokemons = updatedFilteredPokemons.filter(pokemon =>
//         pokemon.experience >= minExperience
//       );
//     }

//     // Apply search filter
//     if (searchQuery !== '') {
//       updatedFilteredPokemons = updatedFilteredPokemons.filter(pokemon =>
//         pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     setFilteredPokemons(updatedFilteredPokemons);
//   };

//   const handleTypeFilterChange = selectedTypes => {
//     setTypeFilters(selectedTypes);
//   };

//   const handleAttackFilterChange = selectedAttack => {
//     setAttackFilter(selectedAttack);
//   };

//   const handleExperienceFilterChange = selectedExperience => {
//     setExperienceFilter(selectedExperience);
//   };

//   const handleSearchAndFilters = (query, filters) => {
//     setSearchQuery(query);
//     setTypeFilters(filters.types);
//     setAttackFilter(filters.attack);
//     setExperienceFilter(filters.experience);
//   };

//   return (
//     <div>
//       <SearchBar
//         onSearchAndFilters={handleSearchAndFilters}
//       />
//       <PokemonCard pokemon={filteredPokemons} />
//     </div>
//   );
// }
    return (
      <div>
        <SearchBar
        onSearch={handleSearchAndFilters}
        // onFilters={handleSearchAndFilters}
      />
       <PokemonCard pokemon={filteredPokemons} /> 
      </div>
    )
    }
 
  export default Pokedex;
