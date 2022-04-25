import styled from "styled-components";

export const ItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 1rem;
  width: 75%;
  line-height: 50px;
  color: ${({ theme }) => theme.colors.darkGray};
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  @media (min-width: 768px) {
    font-size: 1rem;
    width: 30%;
    min-height: 25vh;
  }
`;

export const ItemName = styled.h3`
  font-size: 2rem;
  margin: 1rem;
  text-align: center;
`;

export const ItemPrice = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.lightOrange};
  font-size: 1.2rem;
`;

export const ItemPhoto = styled.img`
  width: 95%;
  border-radius: 5%;
  object-fit: cover;
`;
