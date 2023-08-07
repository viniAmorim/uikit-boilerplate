import React from 'react';
import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../src/themes/theme.json';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Montserrat',;
}
`;

addDecorator((Story) => (
  <>
    <GlobalStyle />
    <Story />
  </>
));

addDecorator(withThemes(ThemeProvider, [theme]));
