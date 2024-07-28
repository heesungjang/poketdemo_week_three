import { useContext } from 'react';
import { PokemonModalContext } from '../context/PokemonModalProvider';

export const usePokemonModal = () => {
  return useContext(PokemonModalContext);
};
