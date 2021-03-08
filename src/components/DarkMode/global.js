import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  #about {
    background: ${({ theme }) => theme.projectBgColor};
  }
  #contact{
    background: ${({ theme }) => theme.projectBgColor};

  }
  .text-color-main{
    background-color: ${({ theme }) => theme.titleColor};
  }
  .cta-btn--hero {
    background-image: linear-gradient(
        135deg
        , ${({ theme }) => theme.titleColor} 0%, ${({ theme }) => theme.titleColor} 100%);
  }
  ul li a:hover {
      
    box-shadow: -20px 30px 30px ${({ theme }) => theme.text};}
 `