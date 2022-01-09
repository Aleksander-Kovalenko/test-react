import { Component } from 'react';

export class PokemonInfo extends Component {
  render() {
    return (
      <div>
        <h3>Pokemon Info</h3>
        {this.props.pokemonName}
      </div>
    );
  }
}
