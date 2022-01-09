import { List, ListItem, ItemText, ItemButton } from './TodoList.styled';
export const Todo = ({ text, completed, onToggleCompleted, onDelete }) => (
  <div>
    <input type="checkbox" checked={completed} onChange={onToggleCompleted} />
    <ItemText>{text}</ItemText>
    <ItemButton type="button" onClick={onDelete}>
      Удалить
    </ItemButton>
  </div>
);
