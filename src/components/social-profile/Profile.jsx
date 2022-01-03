import {
  Container,
  Description,
  Avatar,
  Info,
  List,
  Item,
  ItemInfo,
  ItemQuantity,
} from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, followers, views, likes, stats }) => {
  return (
    <Container>
      <Description>
        <Avatar src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png" alt="User avatar" />
        <Info>{username}</Info>
        <Info>@{tag}</Info>
        <Info>{location}</Info>
      </Description>

      <List>
        <Item>
          <ItemInfo>Followers</ItemInfo>
          <ItemQuantity>{followers}</ItemQuantity>
        </Item>

        <Item>
          <ItemInfo>Views</ItemInfo>
          <ItemQuantity>{views}</ItemQuantity>
        </Item>

        <Item>
          <ItemInfo>Likes</ItemInfo>
          <ItemQuantity>{likes}</ItemQuantity>
        </Item>
      </List>
    </Container>
  );
};
