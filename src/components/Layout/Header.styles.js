import styled from "styled-components";

export const HeaderWrapper = styled.header`
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.darkGray};
  padding: 2rem;
`;
