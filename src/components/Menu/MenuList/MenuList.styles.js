import styled from 'styled-components';

export const ListWrapper = styled.ul`
   list-style: none;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;

   @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 80%;
      margin: auto;
  }
`;
