import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const styles = { form: { marginBottom: 20 } };

export class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  handleNameChange = e => {
    const { value } = e.currentTarget;
    this.setState({ pokemonName: value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.pokemonName === '') {
      return toast.error('введите имя покемона');
    }

    this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: '' });
  };

  render() {
    const { pokemonName } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name={pokemonName}
          value={pokemonName}
          onChange={this.handleNameChange}
        />
        <button type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          Найти
        </button>
      </form>
    );
  }
}
