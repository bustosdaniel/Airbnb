import { Box, Stack, Typography } from '@mui/material'
import Logo from '../assets/images/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import SearchModal from './SearchModal';
import { useState } from 'react';
import Filter from './Filter';

export default function NavigationBar() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Box flex={1} paddingBottom='80px'>    
      <Stack flexDirection='row' justifyContent='space-between' alignItems='center'>
        <Box>
          <img src={Logo} alt='Logo'/>
        </Box>  
        <Stack
          flexDirection='row'
          bgcolor='#FFF'
          alignItems='center'
          borderRadius='10px'
          border='1px solid #e4e4e4'
          padding='12px'
          boxShadow='0 2px 4px rgba(0, 0, 0, 0.1)'
        >
          <Stack flexDirection='row' alignItems='center' justifyContent='space-between'>
            <Typography
              borderRight='1px solid #BDBDBD'
              textAlign='center'
              fontSize='14px'
              fontWeight='400'
              width='140px'
            >
              Helsinki, Finland
            </Typography>
            <Typography
              borderRight='1px solid #BDBDBD'
              textAlign='center'
              fontSize='14px'
              fontWeight='400'
              width='100px'
              color='#BDBDBD'
            >
              Add guests
            </Typography>
          </Stack>
          <Box
            component='button'
            type='button'
            border='none'
            bgcolor='#FFF'
            onClick={handleOpen}
            sx={{ cursor: 'pointer'}}>
            <SearchIcon fontSize='medium' htmlColor='#EB5757' sx={{width: '50px'}} />
          </Box>
        </Stack>
      </Stack>
      <SearchModal open={open} handleClose={handleClose}>
        <Filter handleClose={handleClose} />
      </SearchModal>
    </Box>
  )
}
