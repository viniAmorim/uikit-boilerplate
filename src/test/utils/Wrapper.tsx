import React, { ReactNode } from 'react';

import { MantineProvider } from '@mantine/core';
import { ThemeProvider } from 'styled-components';

import { theme } from '~/themes/MantineThemes';
import whiteLabel from '~/themes/theme.json';

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={whiteLabel}>
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
        {children}
      </MantineProvider>
    </ThemeProvider>
  );
};

export default Providers;
