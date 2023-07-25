import React, { Children, createContext } from 'react'
import { useContext } from 'react';


const myContext = createContext();

export default function DataProvider({ children }) {

    const myData = {
        data1: 100,
        data2: 200,
    }

  return (
    <myContext.Provider value={myData}>{ children }</myContext.Provider>
  )
}

export const useData =()=>{
  const context = useContext(myContext);
  if(!context) throw new Error("useData must be used within a DataProvider");
  return context;
}