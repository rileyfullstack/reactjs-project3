import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { useMenu } from "./MenuProvider";


const MoreButton = () => {
  const setOpen = useMenu();
  return (
    <Box>
      <IconButton
        onClick={() => setOpen(true)}
        size="large"
        color="inherit"
        aria-label="menu"
        sx={{ pb: 1.7 }}
      >
        <MoreVertIcon />
      </IconButton>
    </Box>
  );
};

export default MoreButton;
