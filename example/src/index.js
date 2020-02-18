import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { getRoot } from '@zenkit/helpers'
import { ThemeProvider } from '@zenkit/theme'

import Root from './components/Root'

const $root = getRoot();

const $app = (
  <ThemeProvider root={$root.id}>
    <Root />
  </ThemeProvider>
);

ReactDOM.render($app, $root)
