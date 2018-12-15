import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './containers/App';
import './style.scss';

const intialBoot = () => render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);

intialBoot();

if (module.hot) module.hot.accept('./containers/App', () => intialBoot());
