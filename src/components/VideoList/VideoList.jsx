import { Container, ListItem } from './VideoList.styled';

export const VideoList = ({ videos, onSelect, selectedVideo }) => {
  console.log(selectedVideo);
  return (
    <Container>
      {videos.map(({ id, link }) => (
        <ListItem key={id} onClick={() => onSelect(link)} selected={selectedVideo === link}>
          {link}
        </ListItem>
      ))}
    </Container>
  );
};
