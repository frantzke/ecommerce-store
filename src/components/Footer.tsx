import React from 'react';

import { AppBar, Box, Button, Stack, Toolbar, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

const Header = () => {
  return (
    <AppBar position='static' color='transparent' className='appHeader' component='footer'>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant='body2'>Copyright 2024</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
