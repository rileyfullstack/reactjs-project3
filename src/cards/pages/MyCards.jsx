import React, { useCallback, useEffect } from 'react';
import useCards from '../hooks/useCards';
import CardsFeedback from '../../components/CardsFeedback';
import MoreButton from '../../layout/header/rightNavBar/menu/MoreButton';
import { useSnack } from '../../providers/SnackBarProvider';

export default function CardsPage() {

  const {cards, isLoading, error, handleGetMyCards, handleDeleteCard, handleLikeCard,} = useCards();

  const handleLike = useCallback(async (cardId) => {
    await handleLikeCard(cardId);
    handleGetMyCards();
  }, [])



  useEffect(() => {
    handleGetMyCards();
  }, []);

  const handleDelete = async (Id) => {
    await handleDeleteCard(Id);
    handleGetMyCards();
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