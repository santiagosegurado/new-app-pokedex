import './App.css';
import { useEffect, useState } from 'react';
import { getAllPokemon } from './helpers/getPokemons';
import { SearchBar } from './components/SearchBar';
import { Link } from 'react-router-dom';
import { bgCards } from './helpers/setBgType';

function App() {

  const [pokemons, setPokemons] = useState([])


  useEffect(() => {

    getAllPokemon()
      .then(setPokemons)

  }, [])

  
  return (
    <div id='containerPokemon'>
      <div className='bg-danger p-4 position-sticky top-0'  style={{zIndex:'999' }} >
        <h1 className='text-light'>Pokedex</h1>
        <SearchBar pokemons={pokemons} setPokemons={setPokemons} />
      </div>

      <div className='container' >
        <div className='row'>
          {
            pokemons?.map(p => (

              <div className='col-6 col-xl-3 p-2 pokemonsCard' key={p.id} >
                <Link to={`pokemon/${p.id}`} style={{textDecoration:'none'}}>
                  <div className="card" style={bgCards(p.tipos[0])}>
                    <div className="row">
                      <small className='m-1 text-black'>#{p.id}</small>
                      <img src={p.img} className="mx-auto" alt="..." />
                      <p className='text-center text-dark ' >{p.name.toUpperCase()}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </div >
  );
}

export default App;
