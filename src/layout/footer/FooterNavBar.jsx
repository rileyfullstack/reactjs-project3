import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import ROUTES from '../../routes/routesModel';
import { useNavigate } from 'react-router-dom';


export default function FooterNavBar() {  
  const navigate = useNavigate();
  return (
    <>
      <BottomNavigation showLabels={true} sx={{position:'sticky'}}>
          <BottomNavigationAction label="About"
          icon={<InfoIcon/>} 
          sx={{pt:'8px', pb:'10px'}} 
          onClick={() => navigate(ROUTES.ABOUT)}
          />
          <BottomNavigationAction 
          label="Cards" 
          icon={<InfoIcon/>} 
          sx={{pt:'8px', pb:'10px'}} 
          onClick={() => navigate(ROUTES.CARDS)}
          />      
      </BottomNavigation>
    </>
  )
}
