import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 200px;
  height: 20px;
`;
export const Input = styled.input`
  margin: 0;
  padding: 0;
  width: 120px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
`;
export const Button = styled.button`
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.lightblue};
  color: ${({ theme }) => theme.colors.white};
  width: 80px;
  height: 20px;
  border: none;
`;
