import { Container, Title, List } from '../social-profile/Profile.styled';
import { StatisticsItem } from './StatisticsItem';
export const Statistics = ({ title, events }) => {
  return (
    <Container>
      <Title>{title ?? 'Пустая строка'}</Title>

      <List>
        {events.map(event => (
          <StatisticsItem key={event.id} label={event.label} percentage={event.percentage} />
        ))}
      </List>
    </Container>
  );
};
