import styled from 'styled-components';

export const Container = styled.ul``;
export const ListItem = styled.li`
  color: ${props => (props.selected ? 'blue' : 'black')};
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;
