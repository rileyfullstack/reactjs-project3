import { Grid } from '@mui/material'
import React from 'react'
import BusinessCard from './card/BusinessCard'
import { arrayOf } from 'prop-types'
import cardType from '../cards/models/cardType'

export default function Cards({ cards, handleDelete, handleLike }) {
  return ( 
    <>
    <Grid container>
      {cards.map((card)=>(
        <Grid item key={card._id} xs={12} sm={6} md={4} lg={3} >
          <BusinessCard card={card} key={card._id} handleDelete={handleDelete} handleLike={handleLike}/>
        </Grid>
      ))}
    </Grid>
    </>
  )
}

Cards.propTypes = {
  cards: arrayOf(cardType)
}