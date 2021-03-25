import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  width: 80vw;
  height: 500px;
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
export const CityTitle = styled.h2`
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
export const Button = styled.button`
  background: green;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
`;
