import { Card } from "@mui/material";
import React from "react";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import PropTypes from "prop-types";
import cardType from "../models/cardType";

export default function BusinessCard({ card, handleCardActions }) {
  const image = { url: "assets/images/image1.jpg", alt: "top image" };
  return (
    <>
      <Card sx={{ 
        width: 250, 
        margin: 2, 
        boxShadow: '4px 8px 8px rgba(0, 0, 0, 0.2)'
      }}>
        <CardHead image={image}/>
        <CardBody 
          address={card.address} 
          phoneNumber={card.phone} 
          businessNumber={card.bizNumber} 
          title={card.title} 
          subtitle={card.subtitle}
          id={card._id}
        />
        <CardActionBar id={card._id} handleCardActions={handleCardActions}/>
      </Card>
    </>
  );
}

BusinessCard.propTypes = {
  card: cardType,
  handleCardActions: PropTypes.func
}