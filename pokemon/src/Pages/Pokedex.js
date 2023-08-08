import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import PokemonCard from '../components/PokemonCard';
import axios from 'axios';
import Footer from '../components/Footer';

  function Pokedex() {
    const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();


  const pokeFun = async () => {
    setLoading(true)
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results)
    setLoading(false)
  }
  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url)
      setPokeData(state => {
        state = [...state, result.data]
        state.sort((a, b) => a.id > b.id ? 1 : -1)
        return state;
      })
    })
  }
  useEffect(() => {
    pokeFun();
    console.log(pokeData);
  }, [url])


    return (
      <div>
        <Navbar />
        <SearchBar />
        <PokemonCard pokemon={pokeData} loading={loading} infoPokemon={poke => setPokeDex(poke)} />
        {/* <Footer/> */}
      </div>
    )
  }

  export default Pokedex;