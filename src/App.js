import './App.css';
import { Profile } from './components/social-profile/Profile';
import { Statistics } from './components/Statistics/Statistics';
import ColorPicker from './components/ColorPicker/ColorPicker';

import userInfo from './user.json';
import statisticsInfo from './uploadStatics.json';
import colorPickerOptions from './colorPicker.json';
import { Component } from 'react';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Выучить основы React', completed: true },
      { id: 'id-2', text: 'Разобраться с React Router', completed: false },
      { id: 'id-3', text: 'Пережить Redux', completed: false },
    ],
  };

  deletedTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    const completedTodos = todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);

    return (
      <>
        <div>
          <p>Общее к-во: {totalTodoCount}</p>
          <p>К-во выполненных: {completedTodos} </p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deletedTodo} />

        <ColorPicker options={colorPickerOptions} />
        <Profile
          username={userInfo.username}
          tag={userInfo.tag}
          location={userInfo.location}
          avatar={userInfo.avatar}
          followers={userInfo.stats.followers}
          views={userInfo.stats.views}
          likes={userInfo.stats.likes}
          stats={userInfo.stats}
        />
        <Statistics events={statisticsInfo} title={'Upload stats'} />
      </>
    );
  }
}

export default App;
