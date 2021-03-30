import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
  html, body #root{
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family:  -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  html {
    background: var(--gray);
  }
  :root {
    --primary: #269de6;
    --secondary: #15181C;
    --search: #202327;
    --white: #D9D9D9;
    --black: #262D32;
    --gray: #E5E5E5;
    --outline: #2F3336;
    --retweet: #00C06B;
    --like: #E8265E;
    --main: #33A1F2;
    --main-dark-hover: #011017;
    --main-light-hover: #2C8ED6;
  }
`;
