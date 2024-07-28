import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { getTypeIconSrc } from '../utils/pokemon-helper';
import { usePokemonModal } from '../hooks/usePokemonModal';

const Modal = () => {
  const { isModalOpen, closeModal, currentPokemon } = usePokemonModal();

  if (!currentPokemon) return null;

  return (
    <Dialog.Root
      open={isModalOpen}
      onOpenChange={(isOpen) => !isOpen && closeModal()}
    >
      <Dialog.Portal>
        <Dialog.Overlay className='overlay' />

        <Dialog.Content
          className={`modal ${currentPokemon?.types[0]?.name}`}
          data-content={currentPokemon?.name}
        >
          <div className='pokemon-intro'>
            <a className='arrow-back' onClick={closeModal}></a>

            <div className='current-pokemon'>
              <img src={currentPokemon.imgSrc} alt='Pokemon-Image' />

              <div>
                <span className='id-number'>#{currentPokemon.paddedId}</span>
                <span className='pokemon-name'>{currentPokemon.name}</span>

                <div className='types'>
                  {currentPokemon.types.map(({ name }) => {
                    const typeImg = getTypeIconSrc(name);

                    return (
                      <div key={name} className={name}>
                        <img src={typeImg} alt={name} />
                        <span className='type-name'>{name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className='data-container'>
            <h4>포켓몬 정보</h4>

            <table>
              <tbody>
                <tr>
                  <td className='category'>베이스 정보</td>
                  <td>
                    <ol>키: {currentPokemon.height}</ol>
                    <ol>몸무게: {currentPokemon.weight}</ol>
                  </td>
                </tr>

                <tr>
                  <td className='category'>포켓몬 능력</td>
                  <td>
                    <ol>
                      {currentPokemon.abilities.map(
                        ({ ability, is_hidden }) => {
                          if (is_hidden) {
                            return (
                              <small key={ability.name}>
                                {ability.name} (hidden ability)
                              </small>
                            );
                          }

                          return <li key={ability.name}>{ability.name}</li>;
                        }
                      )}
                    </ol>
                  </td>
                </tr>

                <tr>
                  <td className='category'>포켓몬 타입</td>
                  <td>
                    {currentPokemon.types.map(({ name }) => {
                      const typeImage = getTypeIconSrc(name);

                      return (
                        <img
                          key={name}
                          className={name}
                          src={typeImage}
                          alt={name}
                        />
                      );
                    })}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
