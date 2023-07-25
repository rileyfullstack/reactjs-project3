import MuiMenu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import ROUTES from "../../../../routes/routesModel";
import { useUser } from "../../../../users/providers/UserProvider";
import useUsers from "../../../../users/hooks/useUsers";
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
        <Link to={ROUTES.CARDS} style={{ textDecoration:"none", display: { xs: "block", md: "none" } }}>
            <MenuItem>
              Home
            </MenuItem>
        </Link>
        <Link to={ROUTES.ABOUT} style={{ textDecoration:"none", display: { xs: "block", md: "none" } }}>
            <MenuItem>
              About
            </MenuItem>  
        </Link>
        {user && (
          <>
            <Link to={ROUTES.FAV_CARDS} style={{ textDecoration:"none", display: { xs: "block", md: "none" } }}>
              <MenuItem>
                Liked Cards
              </MenuItem>
            </Link>
            {user.isBusiness &&
            <Link to={ROUTES.MY_CARDS} style={{ textDecoration:"none", display: { xs: "block", md: "none" } }}>
              <MenuItem>
                My Cards
              </MenuItem>
            </Link>}
            <Link style={{ color: 'red'}}>
              <MenuItem onClick={onLogout}>Logout</MenuItem>
            </Link>
          </>
        )}
      </Box>
    </MuiMenu>
  );
};

export default Menu;
