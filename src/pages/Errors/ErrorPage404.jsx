import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div>
      Error page placeholder <br/>
      <Button onClick={handleClick}>Go Back</Button>
    </div>
  )
}
