import { Component } from 'react';
import ReactPlayer from 'react-player/vimeo';

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
import { Container } from './App.styled';
import { Form } from './Form/Form';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    selectedVideo: null,
    todos: [
      { id: 'id-1', text: 'Выучить основы React', completed: true },
      { id: 'id-2', text: 'Разобраться с React Router', completed: false },
      { id: 'id-3', text: 'Пережить Redux', completed: false },
    ],
    showModal: false,
  };

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
  };
  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state != prevState) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    const completedTodos = todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);

    return (
      <>
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

        <div>
          <p>Общее к-во: {totalTodoCount}</p>
          <p>К-во выполненных: {completedTodos} </p>
        </div>

        <TodoList
          todos={todos}
          onDeleteTodo={this.deletedTodo}
          onToggleCompleted={this.toggleCompleted}
        />

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
