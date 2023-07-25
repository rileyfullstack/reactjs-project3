import React, { useCallback, useEffect } from 'react';
import useCards from '../hooks/useCards';
import CardsFeedback from '../../components/CardsFeedback';
import FabAddCard from '../../components/FabAddCard';
import { useUser } from '../../users/providers/UserProvider';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function CardsPage() {

  const {cards, isLoading, error, handleGetCards, handleDeleteCard, handleLikeCard, } = useCards();
  const { user } = useUser();
  const { search } = useParams();

  const handleLike = useCallback(async (cardId) => {
    await handleLikeCard(cardId);
  }, [cards])

  useEffect(() => {
    if (search) {
      handleGetCards(search);
    }
    else {
      handleGetCards();
    }
  }, [search]);

  const handleDelete = async (Id) => {
    await handleDeleteCard(Id);
    if (search) {
      handleGetCards(search);
    }
    else {
      handleGetCards();
    }
  }

  if (search && cards.length === 0) return <Typography sx={{pl: 2, pt: 4}} variant="h4" >Oops! No cards have been found. Maybe try another search term?</Typography>;
  return (
  <>
    <Box sx={{pt: 3, pl: 2}}>
      <Typography variant="h3" >Welcome to CardNet!</Typography>
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