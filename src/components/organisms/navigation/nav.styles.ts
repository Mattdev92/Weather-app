import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  /* background: ${({ theme }) => theme.colors.white}; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 10vh;
  background: linear-gradient(
    to right bottom,
    ${({ theme }) => theme.colors.glassWhite},
    ${({ theme }) => theme.colors.glassWhite2}
  );
  @media (max-width: 400px) {
    height: 5vh;
  }
`;
