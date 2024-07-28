import { useEffect, useState } from 'react';
import { formatPokemonData } from '../utils/pokemon-helper';

const usePokemons = (type) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      setError(null);
      try {
        const API_END_POINT = `https://pokeapi.co/api/v2/type/${type}`;
        const res = await fetch(API_END_POINT);
        const { pokemon: pokemonList } = await res.json();

        const pokemons = await Promise.all(
          pokemonList.map(async ({ pokemon }) => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return formatPokemonData(data);
          })
        );

        setPokemons(pokemons);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, [type]);

  return { pokemons, loading, error };
};

export default usePokemons;
