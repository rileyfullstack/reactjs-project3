import { Grid } from '@mui/material'
import React from 'react'
import BusinessCard from './card/BusinessCard'
import { arrayOf, PropTypes } from 'prop-types'
import cardType from './models/cardType'

export default function Cards({ cards }) {
      const handleCardActions = (id, action) => {
        console.log('card', id, 'has been', action + 'ed');
      }
  return ( 
    <>
    <Grid container>
      {cards.map((card)=>(
        <Grid item key={card._id} xs={12} sm={6} md={4} lg={3}>
          <BusinessCard card={card} handleCardActions={handleCardActions} key={card._id}/>
        </Grid>
      ))}
    </Grid>
    </>
  )
}

Cards.propTypes = {
  cards: arrayOf(cardType)
}