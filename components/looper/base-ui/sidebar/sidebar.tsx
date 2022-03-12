import React from 'react';
import styled from 'styled-components';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Menu, Home, Explore, AutoGraph, Bookmark } from '@mui/icons-material';

export type SidebarProps = {
  /**
   * whether the sidebar is open or not
   */
  open: boolean;
  /**
   * function to toggle the sidebar open/close
   */
  toggleDrawer: () => void;
};

const Container = styled.div`
  ul.MuiList-root div.MuiListItem-root {
    padding: ${(props) => (props.open ? '8px 20px' : 'initial')};

    svg.MuiSvgIcon-root {
      margin-right: ${(props) => (props.open ? '24px' : 'initial')};
    }
  }

  svg.MuiListItemIcon-root {
    min-width: initial;
  }

  div.MuiListItem-root {
    width: ${(props) => (props.open ? '240px' : '72px')};
    height: 74px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div.MuiDrawer-root > div.MuiPaper-root {
    background-color: #242423;
  }

  svg.MuiSvgIcon-root,
  div.MuiListItemText-root {
    color: white;
    font-size: 32px;
  }
`;

const DrawerHeader = styled.div`
  height: 56px;

  button.MuiButtonBase-root {
    width: 72px;
    height: 56px;
  }

  svg.MuiSvgIcon-root {
    font-size: 24px;
  }
`;

const MenuIcons = [
  {
    icon: <Home />,
    label: 'Home',
  },
  {
    icon: <Explore />,
    label: 'Explore',
  },
  {
    icon: <AutoGraph />,
    label: 'Billboard',
  },
  {
    icon: <Bookmark />,
    label: 'Bookmarked',
  },
];

export function Sidebar({ open, toggleDrawer }: SidebarProps) {
  return (
    <Container open={open}>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={toggleDrawer}>
            <Menu />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {MenuIcons.map((item, index) => (
            <ListItem button key={item?.label}>
              {item?.icon}
              {open ? <ListItemText primary={item?.label} /> : null}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Container>
  );
}
