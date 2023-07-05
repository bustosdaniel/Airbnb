import { Box, Icon, Stack, Typography } from '@mui/material'
import { location } from '../../utils/catalogs';

export default function SearchLocation({
  handleClickLocation,
  }: {
    handleClickLocation: (name: string) => void,
  })
{ 
  return (
    <Box flex={1} margin='45px 118px'>
      {location.map((item) => (
      <Box key={item.id}>
        <Stack
          component='button' 
          type='button'
          border='none'
          bgcolor='#FFF'
          flexDirection='row'
          alignItems='center'
          marginBottom='25px'
          onClick={() => handleClickLocation(item.name)}
          sx={{cursor: 'pointer'}}
        >
          <Icon component={item.icon} />
          <Typography fontWeight='400' fontSize='14px' color='#4F4F4F' marginLeft='10px'>{item.name}</Typography>
        </Stack>
      </Box>
      ))}
    </Box>
  )
}
