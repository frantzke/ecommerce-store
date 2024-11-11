import React from 'react';

import { Box, Button, Grid2, Stack, Typography } from '@mui/material';

const types = [
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/ecommerceapp-dev.appspot.com/o/Limited_Time_Offer%2FWOMEN-Blouses_Shirts-id_00001421-03_1_front.jpg?alt=media&token=ef4d73b4-fa18-4346-9ac4-08b57fa72c03',
    title: "Women's",
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/ecommerceapp-dev.appspot.com/o/lB2c5ZrDgweg33zWDLZT%2FMEN-Jackets_Vests-id_00000168-01_1_front.jpg?alt=media&token=432a7960-8811-4ae8-a2a8-c1554178db6e',
    title: "Men's",
  },
];

const ProductTypes = () => {
  return (
    <Stack direction='row' spacing={2} width='100%'>
      {types.map((item) => (
        <Grid2 container spacing={2} sx={{ backgroundColor: '#faedeb' }} width='100%'>
          <Grid2 offset={4} size={4} sx={{ justifyContent: 'end' }}>
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'end',
              }}
            >
              <Typography variant='h3' textAlign='start' gutterBottom sx={{ fontWeight: 'bold' }}>
                {item.title}
              </Typography>
              <Button variant='contained'>Shop Collection</Button>
            </Box>
          </Grid2>
          <Grid2 size={4}>
            <img
              srcSet={item.img}
              src={item.img}
              alt={item.title}
              loading='lazy'
              style={{ maxHeight: '22rem' }}
            />
          </Grid2>
        </Grid2>
        // <Box style={{ maxHeight: '18rem' }}>
        //   <Typography variant='h3' textAlign='start' gutterBottom sx={{ fontWeight: 'bold' }}>
        //     {type.name}
        //   </Typography>
        //   <Button variant='contained'>Shop Collection</Button>
        //   <img
        //     srcSet={type.img}
        //     src={type.img}
        //     alt={type.name}
        //     loading='lazy'
        //     style={{ height: '100%' }}
        //   />
        // </Box>
      ))}
    </Stack>
  );
};

export default ProductTypes;
