import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getPokemon } from '../helpers/getPokemons';
import { bgCards } from '../helpers/setBgType';
import { setTypeImg } from '../helpers/setTypeImg';
import './pokemonScreen.css'

export const PokemonScreen = () => {

  let {id} = useParams();

  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    
    getPokemon(id)
      .then(setPokemon)
  
  }, [])
  
  const { imgFull, tipos, name } = pokemon;


  return (
    <div className='container-fluid'>
      <div className="row containerSinglePokemon" style={tipos && bgCards(tipos[0]) } >
        <div className="col-12" >
          <h4 className='m-2'>#{id}</h4>
          <div className='singleImgPokemon'>
            <img  src={`${imgFull}`} alt="" style={{maxWidth:300}}/>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3 className='text-center text-light m-4 ' >{ name?.toUpperCase() }</h3>
          <div className='typesImgContainer'>
            {
              tipos?.map(t =>( 
                setTypeImg(t)
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
