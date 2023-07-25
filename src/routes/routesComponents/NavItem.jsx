import { Button } from '@mui/material';
import React from 'react';
import { object, string } from 'prop-types';
import NavBarLink from './NavBarLink';
import { useTheme } from '../../providers/ThemeProviders';

export default function NavItem({ to, label, sx }) {
  const { theme } = useTheme(); 

  return (
    <NavBarLink to={to}>
      <Button sx={{ color: theme?.buttonColor, fontWeight: 'bold', ...sx}} >{label}</Button>
    </NavBarLink>
  );
}

NavItem.propTypes = {
  to: string.isRequired,
  label: string.isRequired,
  sx: object,
};
