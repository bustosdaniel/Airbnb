import { Box } from '@mui/material'
import HomePage from './components/HomePage'
import NavigationBar from './components/NavigationBar'

export default function App() {
  return (
    <Box margin='46px auto' maxWidth='1440px'>
      <NavigationBar />
      <HomePage />
    </Box>
    )
}
