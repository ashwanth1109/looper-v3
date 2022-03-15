import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Header } from '@ashwanth1109/looper.base-ui.header';
import { Sidebar } from '@ashwanth1109/looper.base-ui.sidebar';
import { ThemeContext } from '@ashwanth1109/looper.providers.theme';

export type HomeProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

const Container = styled.div``;

const Body = styled.div`
  display: flex;
  background-color: #403d39;
  height: calc(100vh - 56px);
`;

export function Home({ children }: HomeProps) {
  const theme = React.useContext(ThemeContext);
  console.log('theme', theme);

  const [open, setOpen] = React.useState(true);

  const handleDrawerClose = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const toggleDrawer = React.useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

  return (
    <Container>
      <Header />
      <Sidebar open={open} toggleDrawer={toggleDrawer} />
      <Body>Test</Body>
    </Container>
  );
}
