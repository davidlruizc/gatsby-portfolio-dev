import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Footer } from 'components/theme';
import useDarkMode from 'use-dark-mode';

import { Global } from './styles';
import { theme } from '../../../utils/styles/theme';
import './fonts.css';

export const Layout = ({ children }) => {
  const { value } = useDarkMode(false);
  const themeValue = value ? theme.colors.darkTheme : theme.colors.lightTheme;

  return (
    <ThemeProvider theme={themeValue}>
      <Global />
      {children}
      <Footer />
    </ThemeProvider>
  );
};
