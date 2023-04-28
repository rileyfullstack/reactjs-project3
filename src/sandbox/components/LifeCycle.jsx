import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

export default function LifeCycle() {

    const [count, setCount] = useState(0)

  useEffect(() =>{
    return(()=> {
      localStorage.setItem('counter', count)
    })
  }, [count]) 

  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>
        <Typography variant='h4'>
            +
        </Typography>
      </Button>
      <Button onClick={() => setCount(count - 1)}>
        <Typography variant='h4'>
            -
        </Typography>
      </Button>
      <Typography variant='h4'>
            {count}
      </Typography>
    </div>
  )
}
