import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalContextProvider } from './global/context';
import './styles/index.css';
import Home from './pages/Home';

ReactDOM.render(
  <GlobalContextProvider>
    <Home />
  </GlobalContextProvider>,
  document.getElementById('root'),
);
