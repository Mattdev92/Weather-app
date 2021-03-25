import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  height: 80vh;
  flex-direction: column;
  align-items: center;
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;
