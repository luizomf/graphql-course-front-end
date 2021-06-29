import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import reportWebVitals from './reportWebVitals';
import { DefaultRoutes } from './routes/DefaultRoutes';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global-styles';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <DefaultRoutes />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={5}
      />

      <GlobalStyles />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
