import React, { useCallback, useEffect, useState } from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
    Box,
    CardActions,
    IconButton,
} from "@mui/material";
import PropTypes from "prop-types";
import { useUser } from '../../users/providers/UserProvider';
import CardDeleteDialog from './cardDeleteDialog';
import useCards from '../../cards/hooks/useCards';
import ROUTES from '../../routes/routesModel';
import { useNavigate } from 'react-router-dom';


export default function CardActionBar({ id, handleDelete, user_id, handleLike }) {

  const {user} = useUser();
  const [dialog, setDialog] = useState(false);
  const [isLiked, setIsLiked] = useState(null);
  const { isCardLiked } = useCards();
  const navigate = useNavigate();

  const handleSetIsLiked = async (id) => {
    try {
      const checkIsLiked = await isCardLiked(id);
      setIsLiked(checkIsLiked);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLocalLike = useCallback(async (id) => {
    setIsLiked(prev => !prev);
    await handleLike(id);
  }, [id])

  useEffect( () => {
    handleSetIsLiked(id)
  }, [id])

  const handleDeleteCard = () => {
    handleDelete(id)
    setDialog(false);
  }
  return (
    <>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <Box>
            {(user?.isAdmin || (user?.id === user_id)) ? 
            <Box>
              <IconButton aria-label="Delete Card" onClick={() => setDialog(true)}>
                <DeleteIcon/>
              </IconButton>
              <IconButton aria-label="Edit Card" onClick={() => navigate(`${ROUTES.EDIT_CARD}/${id}`)}>
                <EditIcon/>
              </IconButton>
            </Box> : <></>}
          </Box>
          <Box>
              {user && <Box>
              <IconButton aria-label="Favoraite Card" onClick={() => {handleLocalLike(id)}}>
                <FavoriteIcon sx={isLiked ? {color: "red"} : {}}/>
              </IconButton>
              </Box>}
          </Box>
        </CardActions>
        <CardDeleteDialog
        isDialogOpen={dialog}
        onChangeDialog={() => setDialog(false)}
        onDelete={handleDeleteCard}
        />
    </>
  )
}

CardActionBar.propTypes = {
  card: PropTypes.object,
  handleCardActions: PropTypes.func
}