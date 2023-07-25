import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useCards from '../hooks/useCards';
import Spinner from '../../components/Spinner';
import CardDetailsContent from '../../components/CardDetailsContent';
import CardDetailsHead from '../../components/CardDetailsHead';
import CardDetailsLikeFab from '../../components/CardDetailsLikeFab';

export default function CardDetailsPage() {
    const {id} = useParams();
    const { handleGetCard, cards, isLoading, isCardLiked } = useCards();
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
      handleGetCard(id);
      handleSetIsLiked(id);
    }, [])

    const handleSetIsLiked = async (id) => {
      try {
        const checkIsLiked = await isCardLiked(id);
        setIsLiked(checkIsLiked);
      } catch (error) {
        console.error(error);
      }
    };
  
  if(isLoading) return <Spinner/>;

  return (
    <Container>
      <CardDetailsHead card={cards}/>
      <CardDetailsContent card={cards}/>
      <CardDetailsLikeFab id={id}/>
    </Container>
  )
}
