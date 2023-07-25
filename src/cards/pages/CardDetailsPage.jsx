import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useCards from '../hooks/useCards';
import Spinner from '../../components/Spinner';
import CardDetailsContent from '../../components/CardDetailsContent';
import CardDetailsHead from '../../components/CardDetailsHead';
import CardDetailsLikeFab from '../../components/CardDetailsLikeFab';
import ContentBox from '../../components/ContentBox';
import { useUser } from '../../users/providers/UserProvider';

export default function CardDetailsPage() {
    const {id} = useParams();
    const { handleGetCard, cards, isLoading } = useCards();
    const { user } = useUser();

    useEffect(() => {
      handleGetCard(id);
    }, [handleGetCard, id])
  
  if(isLoading) return <Spinner/>;

  return (
    <ContentBox>
      <CardDetailsHead card={cards}/>
      <CardDetailsContent card={cards}/>
      {user && <CardDetailsLikeFab id={id}/>}
    </ContentBox>
  )
}
