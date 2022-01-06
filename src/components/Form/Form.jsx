import { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    tag: '',
    experience: '',
    license: false,
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  handleNameChange = e => {
    const { name, value, checked, type } = e.target;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
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
        <br />
        <label>
          Junior
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleNameChange}
            checked={this.state.experience === 'junior'}
          />
        </label>
        <label>
          Middle
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleNameChange}
            checked={this.state.experience === 'middle'}
          />
        </label>
        <label>
          Senior
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleNameChange}
            checked={this.state.experience === 'senior'}
          />
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="license"
            checked={this.state.license}
            onChange={this.handleNameChange}
          />
          Согласен с условием
        </label>

        <br />

        <button type="submit" disabled={!this.state.license}>
          Отправить
        </button>
      </form>
    );
  }
}
