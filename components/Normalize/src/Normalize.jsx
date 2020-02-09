import { css } from 'styled-components/macro';

const Normalize = css`
  * {
    font: inherit;
    font-size: 100%;

    text-decoration: none;
    vertical-align: baseline;

    margin: 0;
    padding: 0;

    color: inherit;
    background: none;
    background-color: transparent;

    border-style: solid;
    border-width: 0;
    border-color: currentColor;

    outline-offset: .5rem;
    outline-style: solid;
    outline-width: 0;
    outline-color: currentColor;
  }

  ::before, ::after {
    text-decoration: inherit;
    vertical-align: inherit;
  }

  *, ::before, ::after {
    box-sizing: border-box;
  }

  html {
    font: 100%/1.5 system-ui, sans-serif;

    color: #000;
    background-color: #fff;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
  }

  body {
    min-height: 100vh;
  }
`

export default Normalize;
