import React from 'react'
import MyButton from './MyButton'
import { Container, Typography } from '@mui/material'
import useCounter from '../hooks/useCounter';

export default function MyCounter() {
    const {counter, inc, dec, reset} = useCounter(0);
  return (
    <Container>
    <MyButton label={"inc"} func={inc}/>
    <MyButton label={"dec"} func={dec}/>
    <MyButton label={"reset"} func={reset}/>
    <Typography>
        {counter}
    </Typography>
    </Container>
  )
}
