import React from 'react';
import { Sidebar } from './sidebar';

export const BasicSidebar = () => {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = React.useCallback(() => {
    setOpen(!open);
  }, [open]);

  return <Sidebar open={open} toggleDrawer={toggleDrawer} />;
};
