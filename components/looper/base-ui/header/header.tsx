import React from 'react';
import styled from 'styled-components';
import { Menu } from '@mui/icons-material';
import { Avatar } from '@mui/material';

export type HeaderProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: React.ReactNode;
};

const Container = styled.div`
  width: 100%;
  height: 56px;
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #202020;
  box-sizing: border-box;

  svg.MuiSvgIcon-root {
    color: white;
  }
`;

export function Header({ children }: HeaderProps) {
  return (
    <Container>
      <Menu />
      <Avatar>AR</Avatar>
    </Container>
  );
}
