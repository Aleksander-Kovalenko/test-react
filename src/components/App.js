import { Component } from 'react';
import ReactPlayer from 'react-player/vimeo';
import { ToastContainer } from 'react-toastify';

import { Container } from './App.styled';

import { Profile } from './social-profile/Profile';
import { Statistics } from './Statistics/Statistics';
import ColorPicker from './ColorPicker/ColorPicker';
import TodoList from './TodoList/TodoList';
import Collapsible from './Collapsible';
import { VideoList } from './VideoList/VideoList';

import userInfo from '../user.json';
import statisticsInfo from '../uploadStatics.json';
import colorPickerOptions from '../colorPicker.json';
import videos from '../videos.json';
import tabs from '../tabs.json';
import todos from '../todos.json';

import { Form } from './Form/Form';
import { Modal } from './Modal/Modal';
import { Clock } from './Clock/Clock';
import { Tabs } from './Tabs/Tabs';
import { IconButtons } from './IconButtons/IconButtons';
// МЕТОД ДОБАВЛЕНИЯ ИКОНОК
import { ReactComponent as AddIcon } from '../icons/add.svg';
import { ReactComponent as DeleteIcon } from '../icons/add.svg';
import { PokemonForm } from './APIpokemon/PokemonForm';
import { PokemonInfo } from './APIpokemon/PokemonInfo';
export class App extends Component {
  state = {
    selectedVideo: null,
    todos: todos,
    showModal: false,
    pokemonName: '',
    loading: false,
  };

  componentDidMount() {
    // РАБОТА С Записю todos в LocalStorage

    // const todos = localStorage.getItem('todos');
    // const parsedTodos = JSON.parse(todos);
    // if (parsedTodos) {
    //   this.setState({ todos: parsedTodos });
    // }
    // ============================

    // Работа с REST API pokeapi
    this.setState({ loading: true });
    setTimeout(() => {
      fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(resp => resp.json())
        .then(pokemon => this.setState({ pokemon }))
        .finally(() => {
          this.setState({ loading: false });
        });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state != prevState) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  onToggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  onSelectVideo = link => {
    this.setState({ selectedVideo: link });
  };

  deletedTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    console.log(todoId);

    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          console.log('нашли что надо');
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  handleForm = data => {
    console.log(data);
    this.setState({ pokemonName: data });
  };

  render() {
    const { todos, showModal, pokemonName, loading } = this.state;
    const totalTodoCount = todos.length;
    const completedTodos = todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);

    return (
      <>
        <Container>
          {/* ПОДГРУЗКА ИЗОБРАЖЕНИЯ СПИНЕР */}
          <PokemonForm onSubmit={this.handleForm} />
          {/* Библиотека ставится на самом верхнем уровне */}
          <PokemonInfo pokemonName={pokemonName} />
          <ToastContainer autoClose={3000} />
          {/* {loading && <h1>Загружаем...</h1>}
          <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
            {pokemon && <div>{pokemon.name}</div>}
          </div> */}
        </Container>
        {/* <Container>
          <IconButtons onClick={this.onToggleModal}>
            <AddIcon width="40" height="40" fill="#fff" />
          </IconButtons>
        </Container>
        {showModal && (
          <Modal onClose={this.onToggleModal}>
            <h1>Привет, это модалка </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, possimus tempore
              voluptates voluptatem culpa sed repellendus id dolorem molestiae voluptatum, quidem
              saepe laboriosam modi dolore hic numquam blanditiis accusamus laudantium.
            </p>
            <button type="button" onClick={this.onToggleModal}>
              Закрыть модалку
            </button>
          </Modal>
        )}

        <div>
          <p>Общее к-во: {totalTodoCount}</p>
          <p>К-во выполненных: {completedTodos} </p>
        </div>

        <TodoList
          todos={todos}
          onDeleteTodo={this.deletedTodo}
          onToggleCompleted={this.toggleCompleted}
        /> */}
        {/* <Tabs items={tabs} /> */}

        {/* <Container>
          <button type="button" onClick={this.onToggleModal}>
            Открыть/Закрыть таймер
          </button>
          {showModal && <Clock />}
        </Container> */}

        {/* <Container>
          <button type="button" onClick={this.onToggleModal}>
            Открыть модалку
          </button>
          {this.state.showModal && (
            <Modal onClose={this.onToggleModal}>
              <h1>Привет, это модалка </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, possimus tempore
                voluptates voluptatem culpa sed repellendus id dolorem molestiae voluptatum, quidem
                saepe laboriosam modi dolore hic numquam blanditiis accusamus laudantium.
              </p>
              <button type="button" onClick={this.onToggleModal}>
                Закрыть модалку
              </button>
            </Modal>
          )}
        </Container> */}

        {/* <Container>
          <Form onSubmit={this.handleForm} />
        </Container> */}

        {/* <VideoList
          videos={videos}
          onSelect={this.onSelectVideo}
          selectedVideo={this.state.selectedVideo}
        />
        {this.state.selectedVideo && <ReactPlayer url={this.state.selectedVideo} controls />} */}

        {/* <Collapsible triggerPosition="bottom">
          Requires no additional setup, babel plugin, or other config
        </Collapsible>
        <hr />
        <Collapsible isOpen mt={5}>
          Requires no additional setup, babel plugin, or other config
        </Collapsible>
        <hr />
        <Collapsible isDisabled>
          Requires no additional setup, babel plugin, or other config
        </Collapsible> */}

        {/* <ColorPicker options={colorPickerOptions} /> */}

        {/* <Profile
          username={userInfo.username}
          tag={userInfo.tag}
          location={userInfo.location}
          avatar={userInfo.avatar}
          followers={userInfo.stats.followers}
          views={userInfo.stats.views}
          likes={userInfo.stats.likes}
          stats={userInfo.stats}
        /> */}
        {/* <Statistics events={statisticsInfo} title={'Upload stats'} /> */}
      </>
    );
  }
}
