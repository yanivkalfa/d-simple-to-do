import "babel-polyfill";
import 'raf/polyfill';
import 'core-js';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.min.css';
//  import './styles/app.scss';
//  import './styles/common.scss';

import App from './App';
import configStore from './store/configStore';

const store = configStore();

render(
  <Provider store={store} >
    <ThemeProvider theme={theme}>
      <Router>
        <Route component={App}/>
      </Router>
    </ThemeProvider>
  </Provider>
  ,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App'); // eslint-disable-line global-require
    render(
      <Provider store={store} >
        <ThemeProvider theme={theme}>
          <Router>
            <Route component={NextApp}/>
          </Router>
        </ThemeProvider>
      </Provider>,
      document.getElementById('root')
    );
  });
}
