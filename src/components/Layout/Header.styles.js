import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.darkGray};
  padding: 2rem;
`;

export const HeaderPrimary = styled.h1`
  margin: auto;
  font-size: 3.6rem;
`;