import React from 'react';

import { AppBar, Box, Button, Stack, Toolbar, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

const Header = () => {
  return (
    <AppBar position='static' color='transparent' className='appHeader'>
      <Toolbar>
        <Button variant='text' color='primary'>
          Men
        </Button>
        <Button variant='text'>Women</Button>

        <Box sx={{ flexGrow: 1 }}>
          <img
            srcSet='logo-regular.png'
            src='logo-regular.png'
            alt='T-Shirt Store'
            loading='lazy'
            style={{ maxWidth: '100%' }}
          />
        </Box>

        <Stack direction='row' spacing={2} sx={{ alignItems: 'center' }}>
          <Typography variant='h6'>$0.00</Typography>
          <ShoppingCart />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
