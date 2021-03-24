import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  width: 80vw;
  height: 400px;
  background: linear-gradient(
    to right bottom,
    ${({ theme }) => theme.colors.glassWhite},
    ${({ theme }) => theme.colors.glassWhite2}
  );
`;
export const InnerContainer = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
`;
export const CityTitle = styled.h1`
  padding: 0;
  margin: 0;
`;
export const TempTitle = styled.h5`
  padding: 0;
  margin: 0;
`;
export const DescriptionTitle = styled.h5`
  padding: 0;
  margin: 0;
`;
export const Icon = styled.img`
  height: 300px;
  width: auto;
`;
