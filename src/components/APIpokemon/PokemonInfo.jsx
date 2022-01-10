import { Component } from 'react';

import { PokemonFallbackView } from './PokemonErrorView';
import { PokemonDataView } from './PokemonDataView';
import { PokemonPendingView } from './PokemonPendingView';
import pokemonAPI from '../services/pokemon-api';

export class PokemonInfo extends Component {
  state = {
    pokemon: null,
    // loading: false,
    error: null,
    status: 'idle',
  };
  componentDidUpdate(prevProps, prevState) {
    const nextName = this.props.pokemonName;

    if (prevProps.pokemonName !== this.props.pokemonName) {
      this.setState({ status: 'pending' });

      pokemonAPI
        .fetchPokemon(nextName)
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }
  render() {
    const { error, pokemon, status } = this.state;

    const { pokemonName } = this.props;
    if (status === 'idle') {
      return <h3>Введите имя покемона</h3>;
    }
    if (status === 'pending') {
      return <PokemonPendingView pokemonName={pokemonName} />;
    }
    if (status === 'rejected') {
      return <PokemonFallbackView message={error.message} />;
    }

    if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
}

//  return (
//    <div>
//      <h3>Pokemon Info</h3>
//      {error && <h1>{error.message}</h1>}
//      {loading && <p>Загружаем ...</p>}
//      {!this.props.pokemonName && <div>Введите имя покемона</div>}
//      {pokemon && (
//        <>
//          <h2>{pokemon.name}</h2>
//          <p>
//            <img
//              src={pokemon.sprites.other['official-artwork'].front_default}
//              alt={pokemon.name}
//              width="250"
//            />
//          </p>
//        </>
//      )}
//    </div>
//  );
