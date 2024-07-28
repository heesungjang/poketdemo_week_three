import './App.css';
import { useState } from 'react';
import TypesBar from './components/TypesBar';
import PokemonsContainer from './components/PokemonsContainer';
import useDebounce from './hooks/useDebounce';
import { PokemonModalProvider } from './context/PokemonModalProvider';
import Modal from './components/Modal';

function App() {
  const [type, setType] = useState('ice');
  const debouncedType = useDebounce(type, 500);

  return (
    <PokemonModalProvider>
      <div className='wrapper'>
        <h1 className='logo-pokemon'>포켓몬 도감</h1>

        <TypesBar toggleType={setType} />
        <PokemonsContainer type={debouncedType} />
        <Modal />
      </div>
    </PokemonModalProvider>
  );
}

export default App;
