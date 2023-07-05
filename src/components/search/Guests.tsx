import { Box, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

export default function SearchGuests({handleTotalGuests}: {handleTotalGuests: (arg: number) => void}) {
  const [locationCounter, setLocationCounter] = useState(0)
  const [guestsCounter, setGuestsCounter] = useState(0)

  useEffect(() => {
    handleTotalGuests(locationCounter + guestsCounter)
  },[locationCounter + guestsCounter])

  const handleLocationAmount = () => {
    setLocationCounter(locationCounter + 1);
  };
  
  const handleLocationSubstract = () => {
    if (locationCounter > 0) {
      setLocationCounter(locationCounter - 1);
    }
  };

  const handleGuestsAmount = () => {
    setGuestsCounter(guestsCounter + 1);
  };
  
  const handleGuestsSubstract = () => {
    if (guestsCounter > 0) {
      setGuestsCounter(guestsCounter - 1);
    }
  };

  return (
    <Box flex={1} margin='45px 730px'>
      <Box>
        <Typography fontSize='14px' fontWeight='700'>Adults</Typography>
        <Typography fontSize='14px' fontWeight='400' color='#BDBDBD'>Ages 13 or above</Typography>
        <Stack flexDirection='row' alignItems='center' marginY='10px' width='120px'>
          <Box
            component='button'
            onClick={handleLocationSubstract}
            padding='5px 8px' 
            borderRadius='5px'
            bgcolor='#FFF'
            border='1px solid #828282'
            color='#828282'
            sx={{ cursor: 'pointer'}}>
            −
          </Box >
          <Typography
            textAlign='center'
            fontSize='14px'
            fontWeight='700'
            margin='0 auto'
            width='20px'
            >
            {locationCounter}
          </Typography>
          <Box
            component='button'
            onClick={handleLocationAmount}
            padding='5px 8px' 
            borderRadius='5px'
            bgcolor='#FFF'
            border='1px solid #828282'
            color='#828282'
            sx={{ cursor: 'pointer' }}
          >
            +
          </Box >
        </Stack>
      </Box>
      <Box marginTop='60px'>
        <Typography fontSize='14px' fontWeight='700'>Children</Typography>
        <Typography fontSize='14px' fontWeight='400' color='#BDBDBD'>Ages 2-12</Typography>
        <Stack flexDirection='row' alignItems='center' marginY='10px' width='120px'>
          <Box
            component='button'
            onClick={handleGuestsSubstract}
            padding='5px 8px' 
            borderRadius='5px'
            bgcolor='#FFF'
            border='1px solid #828282'
            color='#828282'
            sx={{ cursor: 'pointer' }}>
            −
          </Box>
          <Typography
            textAlign='center'
            fontSize='14px'
            fontWeight='700'
            margin='0 auto'
            width='20px'
          >
            {guestsCounter}
          </Typography>
          <Box
            component='button'
            onClick={handleGuestsAmount}
            padding='5px 8px' 
            borderRadius='5px'
            bgcolor='#FFF'
            border='1px solid #828282'
            color='#828282'
            sx={{ cursor: 'pointer' }}>
            +
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}
