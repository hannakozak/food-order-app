import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0; 
    font-size: 62.5%;
    font-family: 'Baloo 2';
    color: #4B4453;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit; 
  }
  
`