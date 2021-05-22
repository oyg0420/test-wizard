import React from 'react';
import ReactDOM from 'react-dom';
import { TestWizard } from './TestWizard';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
  height: 100vh;
  background: #1e1e1e;
  }
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <TestWizard />
  </>,
  document.getElementById('root')
);
