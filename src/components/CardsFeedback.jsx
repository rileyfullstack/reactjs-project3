import React from 'react'
import Spinner from './Spinner';
import Error from './Error';
import { Box, Container, Typography } from '@mui/material';
import Cards from './Cards'

export default function CardsFeedback({isLoading, error, cards, handleDelete, handleLike}) {
    if (isLoading) return <Spinner/>
    if (error) return <Error errorMessage={error} />;
    if (cards && cards.length === 0) {
      return (
        <Typography>
          Opps... It seems you have no cards to display
        </Typography>
      );
    }
  
    if (cards) {
      return (
        <div>
          <Container>
          <Cards cards={cards} handleDelete={handleDelete} handleLike={handleLike} />
          </Container>

        </div>
      );
    }
  
    return null;
}