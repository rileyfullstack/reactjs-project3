import React, { useEffect } from 'react';
import useCards from '../hooks/useCards';
import CardsFeedback from '../../components/CardsFeedback';
import MoreButton from '../../layout/header/rightNavBar/menu/MoreButton';
import { Typography } from '@mui/material';

export default function CardsPage() {

  const {cards, isLoading, error, handleGetFavCards, handleDeleteCard, handleLikeCard} = useCards();

  useEffect(() => {
    handleGetFavCards();
  }, []);

  const handleDelete = async (cardId) => {
    await handleDeleteCard(cardId);
    handleGetFavCards();
  }
  const handleLike = async (cardId) => {
    await handleLikeCard(cardId);
    handleGetFavCards();
  }
  if (cards && cards.length === 0) {
    return (
      <Typography sx={{pl: 2, pt: 4}} variant="h4" >Oops! You haven't liked any cards yet. Perhaps try to like some and then come back here?</Typography>
    );
  }
  return (
    <>
    <CardsFeedback 
    cards={cards} 
    isLoading={isLoading} 
    error={error}
    handleDelete={handleDelete}
    handleLike={handleLike}
    />
    </>
  )
}