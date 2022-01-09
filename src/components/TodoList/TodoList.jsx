import React from 'react';
import { Todo } from './Todo';

import { List, ListItem, ItemText, ItemButton } from './TodoList.styled';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <List>
    {todos.map(({ id, text, completed }) => (
      <ListItem key={id}>
        <Todo
          text={text}
          completed={completed}
          onToggleCompleted={() => onToggleCompleted(id)}
          onDelete={() => {
            onDeleteTodo(id);
          }}
        />
      </ListItem>
    ))}
  </List>
);

export default TodoList;
