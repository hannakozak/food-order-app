import styled from 'styled-components';

export const ListWrapper = styled.ul`
   list-style: none;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin: 0 auto;
   

   @media (min-width: 768px) {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
  }
`;
