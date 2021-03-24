import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  width: 350px;
  height: 350px;
  background: linear-gradient(
    to right bottom,
    ${({ theme }) => theme.colors.glassWhite},
    ${({ theme }) => theme.colors.glassWhite2}
  );
`;
