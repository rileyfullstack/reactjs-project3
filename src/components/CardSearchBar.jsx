import React, { useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../routes/routesModel';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  }));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '8.5ch',
      '&:focus': {
        width: '8.9ch',
      },
    },
    [theme.breakpoints.up('lg')]: {
      width: '15ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function CardSearchBar() {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const [input, setInput] = useState(""); 
    const navigate = useNavigate();
  
    useEffect(() => {
      const handleResize = () => {
        setViewportWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    
  
    const handleEnterPress = (e) => {
      if(e.key === "Enter") {
        navigate(`${ROUTES.CARDS}/${input}`)
      }
    };
  
    if (viewportWidth < 900) {
      return null; 
    }
  
    return (
      <Box>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
            onChange={(e) => setInput(e.target.value)} // Update the search input on change
            onKeyDown={handleEnterPress} // Add onKeyDown event handler
          />
        </Search>
      </Box>
    );
  }
  