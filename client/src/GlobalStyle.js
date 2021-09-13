import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Urbanist', sans-serif;
    padding: 0;
    margin: 0;
    background-color: ${props => props.theme.MainColor};
  }
`;
