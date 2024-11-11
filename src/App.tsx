import './App.css';

import { Container, Stack, Typography } from '@mui/material';

import Header from './components/Header';
import Carousel from './components/Carousel';
import ProductsList from './components/ProductsList';
import Brands from './components/Brands';
import ProductTypes from './components/ProductTypes';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />

      <Container maxWidth='xl' component='main'>
        <Stack spacing={2}>
          <Carousel />

          <Typography variant='h4' gutterBottom>
            Featured Products
          </Typography>
          <ProductsList />

          {/* <div className='parallax'></div> */}
          {/* <Typography variant='h3' gutterBottom>
            Brands
          </Typography>
          <Brands /> */}

          <ProductTypes />
        </Stack>
      </Container>
      <Footer />
    </>
  );
}

export default App;
