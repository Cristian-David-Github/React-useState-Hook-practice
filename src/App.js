
import './App.css';
import pokemonData from './pokemons';
import { useState } from 'react';

function App(props) {
  const [type, setTipe] = useState("water");




  return (
    <>
      <div class="main">

        <div>
          <h1>Algunos pokemons de tipo {type}</h1>

          <div class='contenedor-tarjetas'>
            <ul>
              {pokemonData[type].map(pokemon => (
                <li key={pokemon.id}>
                  <div className='tarjeta'>
                    <img src={pokemon.avatar} alt={pokemon.pokemonName} />
                    <h2>{pokemon.pokemonName}</h2>
                  </div>
                </li>
              ))}

            </ul>
          </div>
          
          <div>
          <span id="span">Selecciona tu tipo de pokemon favorito</span>
            <ul>
              <li>
                <button onClick={() => setTipe("water")}>water</button></li>
              <li>
                <button onClick={() => setTipe("electric")}>electric</button></li>
              <li>
                <button onClick={() => setTipe("fire")}>fire</button></li>
              <li><button onClick={() => setTipe("rock")}>rock</button>      </li>
            </ul>
          </div>
        </div>

      </div>
    </>


  );
}

export default App;
