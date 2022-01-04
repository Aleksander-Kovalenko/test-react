import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

export const TriggerButton = styled.button`
  order: ${props => (props.position === 'top' ? 0 : 1)};
`;
