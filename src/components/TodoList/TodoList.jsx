import React from 'react';

import { List, ListItem, ItemText, ItemButton } from './TodoList.styled';

const TodoList = ({ todos, onDeleteTodo }) => (
  <List>
    {todos.map(({ id, text, completed }) => (
      <ListItem key={id}>
        <ItemText>{text}</ItemText>
        <ItemButton onClick={() => onDeleteTodo(id)}>Удалить</ItemButton>
      </ListItem>
    ))}
  </List>
);

export default TodoList;
