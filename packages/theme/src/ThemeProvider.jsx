import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { Normalize } from '@zenkit/normalize'
import merge from 'lodash.merge';

import defaultTheme from './defaults'

const ComponentLibThemeProvider = ({ children, theme: userTheme, root }) => {

  const theme = typeof userTheme && {}.toString.call(userTheme) === '[object Function]'
    ? userTheme(defaultTheme)
    : merge(defaultTheme, userTheme);

  return (
    <ThemeProvider theme={theme}>
      <Normalize root={root} />
      {children}
    </ThemeProvider>
  );
}

ComponentLibThemeProvider.defaultProps = {
  theme: {}
}

export default ComponentLibThemeProvider;
