import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

interface Product {
  name: string;
  img: string;
  price: number;
}

let USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const Product = (props: { product: Product }) => {
  const formatPrice = (price: number) => {
    return USDollar.format(price);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          //   height='140'
          image={props.product.img}
          alt={props.product.name}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {props.product.name}
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            {formatPrice(props.product.price)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Product;
