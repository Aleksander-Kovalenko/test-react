import { Item, ItemInfo, ItemQuantity } from '../social-profile/Profile.styled';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <Item>
      <ItemInfo>{label}</ItemInfo>
      <ItemQuantity>{percentage}</ItemQuantity>
    </Item>
  );
};
