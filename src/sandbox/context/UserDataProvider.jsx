import { Box } from '@mui/material';
import React, { Children, createContext } from 'react'
import { useState } from 'react';
import { useContext } from 'react';


const userDataContext = createContext();

export default function UserDataProvider({ children }) {

    const [showBox, setShowBox] = useState(true);
    const toggleBox = () => {
        setShowBox(!showBox);
    }

    const myUserData = {
        userName: "John",
        userAge: 25,
    }

  return (
    <>
        {showBox && <Box sx={{backgroundColor:"red", width:50, height:50}}>
        </Box>}
        <userDataContext.Provider value={toggleBox}>{ children }</userDataContext.Provider>
    </>
  )
}

export const useUserData =()=>{
  const context = useContext(userDataContext);
  if(!context) throw new Error("useUserData must be used within a DataProvider");
  return context;
}