import React, { useCallback, useEffect, useState } from 'react';
import useCards from '../hooks/useCards';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';
import { useParams } from 'react-router-dom';
import { useUser } from '../../users/providers/UserProvider';
import Cards from '../../components/Cards';
import { Typography } from '@mui/material';

export default function CardSearchPage() {
  const { cards, isLoading, error, handleGetCards, handleDeleteCard, handleLikeCard } = useCards();
  const { id } = useParams();
  const [searchedCards, setSearchedCards] = useState([]);
  
  const handleLike = useCallback(async (cardId) => {
    await handleLikeCard(cardId);
  }, [])

  const handleDelete = async (Id) => {
    await handleDeleteCard(Id);
    handleGetCards();
  }
  useEffect(() => {
    handleGetCards();
  }, []);

  useEffect(() => {
    if (cards.length > 0) {
      setSearchedCards(cards.filter((card) => { 
        return card.title.toLowerCase().includes(id.toLowerCase());
      }));
    }
  }, [cards, id]);



  if (searchedCards.length === 0) return <Typography sx={{pl: 2, pt: 4}} variant="h4" >Oops! No cards have been found. Maybe try another search term?</Typography>;
  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;

  return (
    <Cards cards={searchedCards} handleDelete={handleDelete} handleLike={handleLike} />
  );
}
