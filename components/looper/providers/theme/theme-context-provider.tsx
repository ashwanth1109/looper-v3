import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { ThemeContext } from './theme-context';

export type ThemeProviderProps = {
  /**
   * primary color of theme.
   */
  color?: string;

  /**
   * children to be rendered within this theme.
   */
  children: ReactNode;
};

const CommonStylesProvider = styled.div`
  * {
    font-family: 'Quicksand', sans-serif;
    box-sizing: border-box;
  }
`;

export function ThemeProvider({ color, children }: ThemeProviderProps) {
  console.log('ThemeProvider:::RENDER');

  React.useEffect(() => {
    console.log('ThemeProvider fired');
    // Load quicksight font
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute(
      'href',
      'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap'
    );
    document.head.appendChild(link);
  }, []);

  return (
    <ThemeContext.Provider value={{ color }}>
      <CommonStylesProvider>{children}</CommonStylesProvider>
    </ThemeContext.Provider>
  );
}
