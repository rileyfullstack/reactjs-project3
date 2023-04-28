import { Button } from '@mui/material'
import React from 'react'

export default function MyButton({label, func}) {
  return (
    <Button variant={"contained"} onClick={func}>{label}</Button>
  )
}
