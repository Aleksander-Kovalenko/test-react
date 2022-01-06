import { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    tag: '',
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  handleNameChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', tag: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <label>
          Имя
          <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange} />
        </label>
        <label>
          Прозвище
          <input type="text" name="tag" value={this.state.tag} onChange={this.handleNameChange} />
        </label>

        <button type="submit">Отправить</button>
      </form>
    );
  }
}
