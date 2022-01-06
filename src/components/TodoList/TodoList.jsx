import React from 'react';

import { List, ListItem, ItemText, ItemButton } from './TodoList.styled';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <List>
    {todos.map(({ id, text, completed }) => (
      <ListItem key={id}>
        <input type="checkbox" checked={completed} onChange={() => onToggleCompleted(id)} />
        <ItemText>{text}</ItemText>
        <ItemButton type="button" onClick={() => onDeleteTodo(id)}>
          Удалить
        </ItemButton>
      </ListItem>
    ))}
  </List>
);

export default TodoList;
