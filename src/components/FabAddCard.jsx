import { Fab } from '@mui/material'
import React from 'react'
import ROUTES from '../routes/routesModel'
import AddIcon from '@mui/icons-material/Add';
import { useUser } from '../users/providers/UserProvider';


export default function FabAddCard() {
  const { user } = useUser();
  if (user && user.isBusiness) 
  return (
    <>
        <Fab 
          color="primary" 
          aria-label="create card" 
          href={ROUTES.CREATE_CARD}
          style={{
            position: 'fixed', 
            bottom: '70px', 
            right: '50px',
            width: '60px',
            height: '60px'}}
        >
            <AddIcon />
        </Fab>
    </>
  )
  return <></>;
}
