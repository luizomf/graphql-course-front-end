import { ApolloProvider } from '@apollo/client';
import { render } from '@testing-library/react';
import { client } from 'graphql/apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

export const renderTheme = (children) => {
  return render(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>,
  );
};
