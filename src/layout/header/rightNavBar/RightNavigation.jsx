import { Box, IconButton } from '@mui/material';
import FlashlightOnIcon from '@mui/icons-material/FlashlightOn';
import FlashlightOffIcon from '@mui/icons-material/FlashlightOff';
import { useTheme } from '../../../providers/ThemeProviders';
import { useUser } from '../../../users/providers/UserProvider';
import NotLogged from './NotLogged';
import Logged from './Logged';
import MoreButton from './menu/MoreButton';
import CardSearchBar from '../../../components/CardSearchBar';


export default function RightNavigation() {

  const {themeMode, themeModeSwitcher} = useTheme();
  const { user } = useUser();

  return (
    <Box sx={{display: {xs: 'inline-flex'}}}>
    <Box sx={{pt: 1, pr: 1, sm: "none", md: 'inline-flex'}}>
      <CardSearchBar />
    </Box>
    <Box sx={{display: {xs: "none", md:'inline-flex'}}}>
        <IconButton onClick={themeModeSwitcher}>
            {!themeMode ? <FlashlightOnIcon /> : <FlashlightOffIcon/>}
        </IconButton>
        {user ? <Logged /> : <NotLogged />}
    </Box>
    {user ? <Box sx={{display: {xs: 'inline-flex', md: "none"}}}>
      <MoreButton />
    </Box> : null}
    </Box>
  )
}
