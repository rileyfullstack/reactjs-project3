import axios from 'axios'
import React, { useEffect } from 'react'

export default function Country() {

  useEffect(() => {
    getDataFromApi();
  }, [])

  const getDataFromApi = async ()=>{
    const {data} = await axios.get("https://restcountries.com/v3.1/all")
  }

  return (
    <div>
     check console 
    </div>
  )
}
