import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.bg};
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.typography.fontFamily};
    font-size: ${props => props.theme.typography.fontSize};
    line-height: ${props => props.theme.typography.lineHeight};
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
