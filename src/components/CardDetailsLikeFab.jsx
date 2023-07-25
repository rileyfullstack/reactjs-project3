import React, { useEffect, useState } from 'react'
import { Fab } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import useCards from '../cards/hooks/useCards';


export default function CardDetailsLikeFab({id}) {

    const [isLiked, setIsLiked] = useState(false);
    const { isCardLiked, handleLikeCard } = useCards();

    const handleSetIsLiked = async (id) => {
        try {
          const checkIsLiked = await isCardLiked(id);
          setIsLiked(checkIsLiked);
        } catch (error) {
          console.error(error);
        }
      };
    
    const handleLike = async (id) => {
        try {
          await handleLikeCard(id);
          handleSetIsLiked(id);
        } catch (error) {
          console.error(error);
        }
    }

    useEffect(() => {
        handleSetIsLiked(id);
    }, [])

  return (
    <>
        <Fab 
        aria-label='like business'
        color={isLiked ? 'secondary' : 'gray'}
        style={{
            position: 'fixed', 
            bottom: '70px', 
            right: '50px',
            width: '60px',
            height: '60px',
        }}
        onClick={() => handleLike(id)}
        >
            {isLiked ? <FavoriteIcon color='red'/> : <FavoriteBorderIcon color='primary'/>}
        </Fab>
    </>
  )
}
