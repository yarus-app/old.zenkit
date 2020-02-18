import { createGlobalStyle } from 'styled-components/macro';

const fit = (min, max, minScreen, maxScreen) => {


  const diffSize = max - min;
  const diffScreen = maxScreen - minScreen;
  const delta = 100 / (diffSize / diffScreen);

  const viewport = (100 / scale);

  const size = (minScreen - (minScreen / scale)) / 16;

  return `clamp(${min / 16}rem, ${ / delta}, ${max / 16}rem)` `${viewport}vw`

  calc(87.5% + (100vw - 425px) * ((100-87.5)/(768-425)));
}

const Normalize = createGlobalStyle`
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

  :root  {
    --mobile-s:    0;
    --mobile-m:  375;
    --mobile-l:  425;
    --tablet-m:  768;
    --laptop-s: 1024;
    --laptop-m: 1440;
    --laptop-l: 2560;

    font-size: 0.875rem;
    line-height: 1.5;

    @media screen and (min-width: var(--mobile-l)*1px) and (max-width: 768px) {
      font-size:
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: calc(100% + (100vw - 768px) * ((100-87.5)/(1024-768)));
    }

    @media screen and (min-width: 1024px) and (max-width: 1440px) {
      font-size: calc(112.5% + (100vw - 1024px) * ((112.5-100)/(1440-1024)));
    }

    @media screen and (min-width: 1440px) and (max-width: 2560px) {
      font-size: calc(125% + (1vw - 1.44px) * 100 * ((125-112.5)/(2560-1440)));
    }

    @media screen and (min-width: 2560px) {
      font-size: 175%;
    }
  }

  html {
    tab-size: 4;
    -webkit-tap-highlight-color: transparent ;
      -ms-text-size-adjust: 100%; /* 5 */
    -webkit-text-size-adjust: 100%; /* 5 */
    text-align: left;

    color: ${({ theme }) => theme.colors.base.text};
    background-color: ${({ theme }) => theme.colors.base.bg};

    /* scroll-behavior: smooth; */
    text-rendering: optimizeSpeed;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  ${({ root }) => root ? '#' + root : 'body > :first-child' } {
    width: 100%;
    min-height: 100vh;

    &::before, &::after {
      content: '';
      display: table;
    }

    &::after {
      clear: both;
    }
  }

  [tabindex='-1']:focus {
    outline: 0 !important;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none !important;
  }
`

// font-family: ${({ theme }) => theme.typography.baseFont.join(',')};
// /*  font-size: ${({ theme }) => theme.typography.baseSize}; */
// font-size: calc(16px + .49382vw);
// line-height: ${({ theme }) => theme.typography.baseLineHeight};
// font-weight: ${({ theme }) => theme.typography.baseWeight || 400};

export default Normalize;
