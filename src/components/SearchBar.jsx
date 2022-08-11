import React, { useEffect, useState } from 'react'
import { getAllPokemon } from '../helpers/getPokemons'

export const SearchBar = ({ setPokemons, pokemons }) => {

  const [pokemonsInput, setPokemonsInput] = useState('')

  useEffect(() => {
    if (pokemonsInput === '') {
      getAllPokemon()
        .then(setPokemons)
    }
  }, [pokemonsInput, setPokemons])
  

  const handleInputChange = ({ target }) => {

    setPokemonsInput(target.value)

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setPokemons(filtrarPokemons(pokemonsInput))

  }

  const filtrarPokemons = (id) => {

    let arrayPokemon = pokemons.filter(poke => poke.name.includes(id))

    return arrayPokemon;
  }


  return (
    <form onSubmit={handleSubmit} style={{ maxWidth:400 }}>
      <input
        type="text"
        value={pokemonsInput}
        onChange={handleInputChange}
        className='w-75'
        
      />
      <button 
        type="reset" 
        onClick={()=> setPokemonsInput('')}
        className='w-25'
      >
        Reset
      </button>
    </form>
  )
}
