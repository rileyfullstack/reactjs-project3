import React from 'react'
import {
    Box,
    Card,
    CardActions,
    CardActionArea,
    CardContent,
    CardHeader,
    Divider,
    IconButton,
    Typography,
  } from "@mui/material";
import { number, PropTypes, string } from 'prop-types';
import addressType from '../../cards/models/addressType';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';

export default function CardBody({ address, phoneNumber, businessNumber, title, subtitle, id, description }) {
  const navigate = useNavigate();
  return (
    <>
      <CardHeader title={title} subheader={subtitle}></CardHeader>
        <Divider variant="middle" />
        <CardActionArea onClick={()=>navigate(`${ROUTES.CARD_INFO}/${id}`)}>
          <CardContent>
            <Typography>
              <strong>Phone Number:</strong> {phoneNumber}
            </Typography>
            <Typography>
              <strong>Address:</strong> {address.street}, {address.houseNumber}
            </Typography>
            <Typography>
              <strong>Number:</strong> {businessNumber}
            </Typography>
            </CardContent>
        </CardActionArea>
        <Divider variant="middle"/>
    </>
  )
}

CardBody.propTypes = {
  address:addressType.isRequired,
  phoneNumber:string.isRequired,
  businessNumber:number.isRequired,
  title:string.isRequired,
  subtitle:string.isRequired,
  id:string.isRequired
}