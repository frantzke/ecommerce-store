import { Stack } from '@mui/material';

import Product from './Product';

const products = [
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/ecommerceapp-dev.appspot.com/o/5Z74F71Tx3KkWdX08wCR%2FWOMEN-Tees_Tanks-id_00007981-03_3_back.jpg?alt=media&token=5088fbb2-be8b-4776-9e5a-817cb2442d9a',
    name: 'AShirt',
    price: 10,
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/ecommerceapp-dev.appspot.com/o/Limited_Time_Offer%2FWOMEN-Blouses_Shirts-id_00001421-03_1_front.jpg?alt=media&token=ef4d73b4-fa18-4346-9ac4-08b57fa72c03',
    name: 'Red Top',
    price: 20,
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/ecommerceapp-dev.appspot.com/o/SgTLLvzkY6icEoPHtFkn%2FMEN-Tees_Tanks-id_00003458-01_1_front.jpg?alt=media&token=554abbcb-7d0c-4d84-806f-0ea2e2c63eb2',
    name: 'BAD Shirt',
    price: 29.99,
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/ecommerceapp-dev.appspot.com/o/lB2c5ZrDgweg33zWDLZT%2FMEN-Jackets_Vests-id_00000168-01_1_front.jpg?alt=media&token=432a7960-8811-4ae8-a2a8-c1554178db6e',
    name: 'Black Jacket',
    price: 64.99,
  },
];

const ProductsList = () => {
  return (
    <Stack direction='row' spacing={2}>
      {products.map((product, i) => (
        <Product key={i} product={product} />
      ))}
    </Stack>
  );
};

export default ProductsList;
