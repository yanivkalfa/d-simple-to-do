import "babel-polyfill";
import 'raf/polyfill';
import 'core-js';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import 'styles/global-styles';
import theme from './styles/theme';
import Root from 'containers/Root/Root';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.min.css';

import configStore from './store/configStore';

const store = configStore();

render(
  <Provider store={store} >
    <ThemeProvider theme={theme}>
      <Router>
        <Route component={Root}/>
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('containers/Root/Root', () => {
    const Root = require('containers/Root/Root'); // eslint-disable-line global-require
    render(
      <Provider store={store} >
        <ThemeProvider theme={theme}>
          <Router>
            <Route component={Root}/>
          </Router>
        </ThemeProvider>
      </Provider>,
      document.getElementById('app')
    );
  });
}
