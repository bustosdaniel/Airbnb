import { Box, Chip, Stack, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import { information } from '../utils/catalogs';

export default function HomePage() {
  return (
    <Box>
      <Stack flexDirection='row' justifyContent='space-between' alignItems='center'marginBottom='32px'>
        <Typography fontWeight='700' fontSize='24px'>Stays in Finland</Typography>
        <Typography fontWeight='500' fontSize='14px' color='#4F4F4F'>12+ tays</Typography>
      </Stack>
      <Box>
        <Stack flexWrap='wrap' flexDirection='row' gap='50px' justifyContent='space-between'>
          {information.map((item) => (
          <Box width='395px' key={item.id}>
            <Box width='395px' height='269px'>
              <img
                src={item.img}
                alt='image'
                width='100%'
                height='100%'
                style={{ borderRadius: '24px', marginBottom: '20px' }}
              />
            </Box>
            <Stack flexDirection='row' justifyContent='space-between' alignItems='center' padding='20px 0px 14px 0px'>
              <Stack flexDirection='row' alignItems='center'>
                {item.host === '' ? null : 
                  <>
                    <Chip
                      label={item.host}
                      size="small"
                      variant="outlined"
                      sx={{ marginRight: '10px', fontWeight: '700', fontSize: '12px', border: '1px solid'}} />
                  </>
                }
                <Typography fontSize='14px' fontWeight='400' color='#828282'>{item.title}</Typography>
              </Stack>
              <Stack flexDirection='row' justifyContent='space-between' alignItems='center'>
                <StarIcon fontSize='small' sx={{marginRight: '2px'}} htmlColor='#EB5757'/>
                <Typography fontSize='14px' fontWeight='500'>{item.rating}</Typography>
              </Stack>
            </Stack>
              <Typography fontSize='16px' fontWeight='600'>{item.subTitle}</Typography>
          </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  )
}
