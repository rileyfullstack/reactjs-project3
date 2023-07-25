import { Avatar, Box, Button, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import useUsers from "../../../users/hooks/useUsers";
import { useUser } from "../../../users/providers/UserProvider";
import { useMenu } from "./menu/MenuProvider";

export default function Logged() {

  const { handleLogout } = useUsers();
  const { user } = useUser();
  const setOpen = useMenu();

  return (
    <>
      <Box>
        <Typography sx={{marginTop: 1.2, marginLeft:2}}>
          <strong>Welcome, {user.firstName}!</strong>
        </Typography>
        <Button sx={{p: 0, fontSize:10, ml: 10.6}} onClick={handleLogout}>logout</Button>
      </Box>
      <Tooltip title="Open settings">
        <IconButton sx={{ p: 0, display: "inline-flex", marginLeft: 1 }} onClick={() => setOpen(true)}>
          <Avatar alt="Bird" src="/assets/images/avatar.png" />
        </IconButton>
      </Tooltip>
    </>
  );
}
