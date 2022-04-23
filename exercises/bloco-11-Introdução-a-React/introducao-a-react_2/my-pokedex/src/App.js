import './App.css';
import pokemons from './data';
import GetPokemon from './GetPokemon';

function App() {
  return (
    <div className="pokedex">
      <h1>Pokedex</h1>
      {pokemons.map((pokemon) => <GetPokemon key = {pokemon.id} pokemon = {pokemon} />)}
    </div>
  );
}

export default App;
