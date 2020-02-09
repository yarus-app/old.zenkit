import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import merge from 'lodash.merge';

const defaultTheme = {};

const ComponentLibThemeProvider = ({ children, theme: userTheme }) => {

  const theme = typeof userTheme && {}.toString.call(userTheme) === '[object Function]'
    ? userTheme(defaultTheme)
    : merge(defaultTheme, userTheme);

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

ComponentLibThemeProvider.defaultProps = {
  theme: {}
}

export default ComponentLibThemeProvider;
