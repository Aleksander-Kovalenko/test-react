import { Component } from 'react';

export class PokemonInfo extends Component {
  state = {
    pokemon: null,
    loading: false,
    error: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const nextName = this.props.pokemonName;

    if (prevProps.pokemonName !== this.props.pokemonName) {
      this.setState({ loading: true, pokemon: null });
      setTimeout(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
          .then(response => {
            if (response.ok) {
              return response.json();
            }

            return Promise.reject(
              new Error(`Все пропало, покемона с именем ${this.props.pokemonName} нет.`),
            );
          })
          .then(pokemon => this.setState({ pokemon }))
          .catch(error => this.setState({ error }))
          .finally(() => this.setState({ loading: false }));
      }, 1000);
    }
  }
  render() {
    return (
      <div>
        <h3>Pokemon Info</h3>
        {this.state.error && <h1>{this.state.error.message}</h1>}
        {this.state.loading && <p>Загружаем ...</p>}
        {!this.props.pokemonName && <div>Введите имя покемона</div>}
        {this.state.pokemon && (
          <>
            <h2>{this.state.pokemon.name}</h2>
            <p>
              <img
                src={this.state.pokemon.sprites.other['official-artwork'].front_default}
                alt={this.state.pokemon.name}
                width="250"
              />
            </p>
          </>
        )}
      </div>
    );
  }
}
