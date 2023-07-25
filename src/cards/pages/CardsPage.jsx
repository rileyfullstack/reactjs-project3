import React, { useCallback, useEffect } from 'react';
import useCards from '../hooks/useCards';
import CardsFeedback from '../../components/CardsFeedback';
import FabAddCard from '../../components/FabAddCard';
import { useUser } from '../../users/providers/UserProvider';
import { Box, Typography } from '@mui/material';

export default function CardsPage() {

  const {cards, isLoading, error, handleGetCards, handleDeleteCard, handleLikeCard, } = useCards();
  const { user } = useUser();

  const handleLike = useCallback(async (cardId) => {
    await handleLikeCard(cardId);
    handleGetCards();
  }, [])

  useEffect(() => {
    handleGetCards();
  }, []);

  const handleDelete = async (Id) => {
    await handleDeleteCard(Id);
    handleGetCards();
  }

  return (
  <>
    <Box sx={{pt: 3, pl: 2}}>
      <Typography variant="h3" >Welcome to CardHub!</Typography>
      <Typography variant="h4" >The best business card website you will ever lay your eyes upon.</Typography>
    </Box>
    <CardsFeedback 
    cards={cards} 
    isLoading={isLoading} 
    error={error}
    handleDelete={handleDelete}
    handleLike={handleLike}
    />
    {user?.isBusiness && <FabAddCard />}
    </>
  )
}