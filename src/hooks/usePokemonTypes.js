import { useEffect, useState } from 'react';

const usePokemonTypes = () => {
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTypes = async () => {
      setLoading(true);
      setError(null);
      try {
        const API_END_POINT = `https://pokeapi.co/api/v2/type/`;
        const res = await fetch(API_END_POINT);
        const { results } = await res.json();

        setTypes(
          results.filter(
            ({ name }) =>
              name !== 'unknown' && name !== 'shadow' && name !== 'stellar'
          )
        );
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTypes();
  }, []);

  return { types, loading, error };
};

export default usePokemonTypes;
