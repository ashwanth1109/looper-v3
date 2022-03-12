import React from 'react';
import styled from 'styled-components';
import { AppBar, Avatar, Toolbar } from '@mui/material';

export type HeaderProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: React.ReactNode;
};

const Container = styled.div`
  width: 100%;
  height: 56px;
  box-sizing: border-box;

  header.MuiPaper-root {
    background-color: #242423;
    height: 56px;
  }

  div.MuiToolbar-root {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    min-height: initial;
    height: 56px;
  }
`;

export function Header({ children }: HeaderProps) {
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <div />
          <Avatar>AR</Avatar>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
