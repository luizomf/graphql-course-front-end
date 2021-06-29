import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles/global-styles';
import { theme } from '../src/styles/theme';
import {BrowserRouter} from 'react-router-dom'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  backgrounds: {
    default: 'super-white',
    values: [
      {
        name: 'super-white',
        value: theme.colors.deepWhite,
      },
      {
        name: 'super-dark',
        value: theme.colors.black,
      },
      {
        name: 'gray',
        value: theme.colorGray.gray01,
      },
    ],
  },
};

export const decorators = [
  (Story) => {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Story />
          <GlobalStyles />
        </ThemeProvider>
      </BrowserRouter>
    );
  },
];
