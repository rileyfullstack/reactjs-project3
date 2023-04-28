import React from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
    Box,
    CardActions,
    IconButton,
} from "@mui/material";
import PropTypes from "prop-types";

export default function CardActionBar({ id, handleCardActions }) {
  return (
    <>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <Box>
            <IconButton aria-label="Delete Card" onClick={() => handleCardActions(id, "delet")}>
              <DeleteIcon></DeleteIcon>
            </IconButton>
            <IconButton aria-label="Edit Card" onClick={() => handleCardActions(id, "edit")}>
              <EditIcon></EditIcon>
            </IconButton>
          </Box>
          <Box>
            <IconButton aria-label="Call Card">
              <CallIcon></CallIcon>
            </IconButton>
            <IconButton aria-label="Favoraite Card" onClick={() => handleCardActions(id, "lik")}>
              <FavoriteIcon></FavoriteIcon>
            </IconButton>
          </Box>
        </CardActions>
    </>
  )
}

CardActionBar.propTypes = {
  card: PropTypes.object,
  handleCardActions: PropTypes.func
}