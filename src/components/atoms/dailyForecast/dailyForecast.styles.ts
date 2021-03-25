import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  @media (max-width: 400px) {
    width: 300px;
    height: 300px;
  }
`;
export const Icony = styled.img`
  height: 100px;
  width: auto;
`;
