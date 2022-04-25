import styled, { css } from "styled-components";

export const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkOrange};
  padding: 1rem 0;
  margin: 0;
`;

export const ItemPrice = styled.span`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.lightOrange};
`;
export const SmallButton = styled.span`
  color: ${({ theme }) => theme.colors.lightOrange};
  border: 1px solid ${({ theme }) => theme.colors.lightOrange};
  text-align: center;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.3rem 0.8rem;
  margin: 0.3rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkOrange};
    border: 1px solid ${({ theme }) => theme.colors.darkOrange};
    color: ${({ theme }) => theme.colors.white};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.darkOrange};
    border: 1px solid ${({ theme }) => theme.colors.darkOrange};
    color: ${({ theme }) => theme.colors.white};
  }

  ${(props) =>
    props.primary &&
    css`
      background: transparent;
      border: 1px solid ${({ theme }) => theme.colors.darkGray};
      color: ${({ theme }) => theme.colors.darkGray};
      margin: 2rem;
      &:hover {
        background: transparent;
        color: ${({ theme }) => theme.colors.darkGray};
      }
      &:active {
        background: transparent;
        color: ${({ theme }) => theme.colors.darkGray};
      }
    `};
`;
