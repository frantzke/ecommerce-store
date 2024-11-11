import './Caousel.css';
import { Box, Button, Grid2, Paper, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import Carousel from 'react-material-ui-carousel';

const images = [
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/ecommerceapp-dev.appspot.com/o/5Z74F71Tx3KkWdX08wCR%2FWOMEN-Tees_Tanks-id_00007981-03_3_back.jpg?alt=media&token=5088fbb2-be8b-4776-9e5a-817cb2442d9a',
    title: 'Slick. Modern. Awesome.',
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/ecommerceapp-dev.appspot.com/o/Limited_Time_Offer%2FWOMEN-Blouses_Shirts-id_00001421-03_1_front.jpg?alt=media&token=ef4d73b4-fa18-4346-9ac4-08b57fa72c03',
    title: 'Limited Time Offers',
  },
];

export default function Test3() {
  //TODO: Dynamically set the height of the carousel and items
  return (
    <Carousel animation='fade' navButtonsAlwaysVisible autoPlay={false} height={'36rem'}>
      {images.map((item, i) => (
        <>
          <Grid2 container spacing={2} sx={{ backgroundColor: '#faedeb' }}>
            <Grid2 offset={3} size={3} sx={{ justifyContent: 'end' }}>
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'start',
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
                className='carousel-img'
                srcSet={item.img}
                src={item.img}
                alt={item.title}
                loading='lazy'
              />
            </Grid2>
          </Grid2>
        </>
      ))}
    </Carousel>
  );
}
