import { useEffect, useState } from 'react';
// import usePokemons from '../hooks/usePokemons';
import PokemonCard from './PokemonCard';
import { formatPokemonData } from '../utils/pokemon-helper';
import Loader from './Loader';
import usePokemons from '../hooks/usePokemons';

const PokemonsContainer = ({ type }) => {
  const { pokemons, loading } = usePokemons(type);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className='pokemons-container'>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonsContainer;
