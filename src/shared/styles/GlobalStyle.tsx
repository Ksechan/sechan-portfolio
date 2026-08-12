'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    padding: 0;
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.color.bg};
    color: ${({ theme }) => theme.color.textPrimary};
    font-family: ${({ theme }) => theme.font.sans};
    line-height: 1.6;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  button {
    font-family: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;
