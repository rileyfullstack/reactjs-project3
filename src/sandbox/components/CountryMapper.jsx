import { Avatar, Container, Typography } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function CountryMapper() {

    const [data, setData] = useState([]);

    useEffect(() => {
        getDataFromApi();
      }, [])
    
    const getDataFromApi = async ()=>{
      try {
        const {data} = await axios.get("https://restcountries.com/v3.1/all")
        setData(data);
      } catch (err) {
        console.log(err.messege)
      }
    }

  return (
    <Container>
        {data.map((country) =>(
            <Container key={country.cca3}>
            <Avatar src={country.flags.png} alt={country.flags.png}/>
            <Typography>
                {country.name.common}
            </Typography>
            </Container>
        ))}
    </Container>
  )
}
