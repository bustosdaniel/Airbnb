import { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import '../App.css'
import SearchLocation from './search/Location';
import SearchGuests from './search/Guests';

export default function Filter({ handleClose }: { handleClose: () => void }) {
  const [active, setActive] = useState(0)
  const [total, setTotal] = useState(0)
  const [location, setLocation] = useState('')

  const handleTotalGuests = (arg: number) => {
    setTotal(arg)
  }

  const handleButton = (buttonId: number) => {
    setActive(buttonId)
  }

  const handleLocation = (name: string) => {
    setLocation(name)
  }
 
  return (
    <Box flex={1} margin='93px auto' height='350px'>
      <Box width='100%' >
        <Stack
          flexDirection='row'
          bgcolor='#FFF'
          alignItems='center'
          borderRadius='15px'
          border='1px solid #e4e4e4'
          boxShadow='0 2px 4px rgba(0, 0, 0, 0.1)'
          margin='auto 97px'
        >
          <Box
            className='add-location'
            component='button'
            type='button'
            border='none'
            bgcolor='#FFF'
            textAlign='start'
            padding='10px 25px'
            borderRadius='15px'
            onClick={() => handleButton(1)}
            sx={{ cursor: 'pointer', width: '520px'}}
          >
            <Typography fontWeight='800' fontSize='10px'>LOCATION</Typography>
            <Typography fontSize='14px' fontWeight='400'>{location}</Typography>
          </Box>
          <Box
            className='add-location'
            component='button'
            type='button'
            border='none'
            bgcolor='#FFF'
            padding='10px 25px'
            textAlign='start'
            borderRadius='15px'
            marginLeft='90px'
            onClick={() => handleButton(2)}
            sx={{ cursor: 'pointer', width: '520px'}}
          >
            <Typography fontWeight='800' fontSize='10px'>GUESTS</Typography>
            <Typography fontSize='14px' fontWeight='400' color='#BDBDBD'>
              {total > 0 ? `${total} guests` : 'Add guests'}
            </Typography>
          </Box>
          <Box
            component='button'
            type='button'
            border='none'
            display='flex'
            flexDirection='row'
            justifyContent='flex-end'
            alignItems='center'
            bgcolor='#EB5757'
            borderRadius='15px'
            padding='10px'
            onClick={handleClose}
            sx={{cursor: 'pointer', marginLeft:'250px'}}
          >
            <SearchIcon fontSize='medium' htmlColor='#FFF' sx={{ width: '50px' }} />
            <Typography color='#FFF' fontWeight='700' fontSize='14px' paddingRight='18px'>Search</Typography>
          </Box>
        </Stack>
        {active === 1 && <SearchLocation handleClickLocation={handleLocation} />}
        {active === 2 && <SearchGuests handleTotalGuests={handleTotalGuests} />}
      </Box>
    </Box>
  )
}
