import { Typography } from '@mui/material';
import { Container } from '@mui/system'
import React, { useEffect } from 'react'
import Cards from '../Cards'
import { useState } from 'react';
import axios from 'axios';

export default function CardsPage() {

  const title = "title";
  const subtitle = "subtitle";
  const [cards, setCards] = useState([]);

  useEffect(() => {
    handleGetCards()
  }, [])

  const handleGetCards = async () =>{
    try{
      const { data } = await axios.get("https://localhost:8181/cards");
      setCards(data);
      console.log("Cards have been successfully retrived.");
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <div>
        <Container>
          <Typography sx={{pt:'15px'}}>
          </Typography>
          <Cards cards={cards}/>
        </Container>
    </div>
  )
}

