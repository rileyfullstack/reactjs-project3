import MuiMenu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";
import useUsers from "../../../../users/hooks/useUsers";
import MenuLink from "./MenuLink";
import { Link } from "react-router-dom";

const Menu = ({ isOpen, anchorEl, onClose }) => {
  const { user } = useUser();
  const { handleLogout } = useUsers();

  const onLogout = () => {
    handleLogout();
    onClose();
  };

  return (
    <MuiMenu
      open={isOpen}
      onClose={onClose}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Box>
        <Link to={ROUTES.ABOUT} style={{ textDecoration:"none", display: { xs: "block", md: "none" } }}>
            <MenuItem>
              About
            </MenuItem>  
        </Link>
        {user && (
          <>
            <Link to={ROUTES.USER_PROFILE} style={{ textDecoration:"none" }}>
            <MenuItem>
              Profile
            </MenuItem>  
            </Link>
            <Link to={ROUTES.EDIT_USER} style={{ textDecoration:"none"}}>
            <MenuItem>
              Edit profile
            </MenuItem>
            </Link>
            <Link style={{ textDecoration:"none"}}>
            <MenuItem onClick={onLogout}>Logout</MenuItem>
            </Link>
          </>
        )}
      </Box>
    </MuiMenu>
  );
};

export default Menu;
