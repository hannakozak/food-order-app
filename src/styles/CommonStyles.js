import styled, { css } from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  background: transparent;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.lightOrange};
  color: ${({ theme }) => theme.colors.darkOrange};
  margin: 0.4rem;
  padding: 0.5rem 1rem;
  width: 40%;

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

  @media (min-width: 768px) {
    width: 50%;
  }

  ${(props) =>
    props.primary &&
    css`
      background: ${({ theme }) => theme.colors.lightOrange};
      color: ${({ theme }) => theme.colors.white};
      &:hover {
        background-color: ${({ theme }) => theme.colors.darkOrange};
        border: 1px solid ${({ theme }) => theme.colors.darkOrange};
      }
      &:active {
        background-color: ${({ theme }) => theme.colors.darkOrange};
        border: 1px solid ${({ theme }) => theme.colors.darkOrange};
      }
    `};
`;

export const HeaderPrimary = styled.h1`
  margin: auto;
  font-size: 2.5rem;
`;

export const HeaderSecondary = styled.h2`
  font-size: 2rem;
  margin: 1rem;
  text-align: center;
`;

export const HeaderTetiary = styled.h3`
  font-size: 1.4rem;

  ${(props) =>
    props.primary &&
    css`
      color: ${({ theme }) => theme.colors.lightOrange};
    `};
`;
