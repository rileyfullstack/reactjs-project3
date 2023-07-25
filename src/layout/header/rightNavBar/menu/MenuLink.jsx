import React from "react";
import { string, func } from "prop-types";
import MenuItem from "@mui/material/MenuItem";
import { makeFirstLetterCapital } from "./utils/algoMethods";
import NavItem from "../../../../routes/routesComponents/NavItem";

const MenuLink = ({ text, navigateTo, onClick, styles }) => {
  return (
    <NavItem to={navigateTo}>
      <MenuItem sx={{ ...styles }} onClick={onClick}>
        {text}
      </MenuItem>
    </NavItem>
  );
};

MenuLink.propTypes = {
  navigateTo: string.isRequired,
  onClick: func.isRequired,
  text: string.isRequired,
};

MenuLink.defaultProps = {
  styles: {},
};

export default MenuLink;
