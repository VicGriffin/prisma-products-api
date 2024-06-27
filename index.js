import express from 'express';
import { PrismaClient } from '@prisma/client';
import productsRoutes from './routes/products.routes.js';
import { config } from 'dotenv';

config();
const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use('/products', productsRoutes);

app.listen(3002, () => {
  console.log('App running on port 3002...');
});

const createProduct = async () => {
  try {
    const product = await prisma.product.create({
      data: {
        product_Thumbnail: 'http://dummyimage.com/240x100.png/cc0000/ffffff',
        product_Title: 'Coconut - Shredded, Unsweet',
        productDescription: 'Sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis',
        productCost: 17.89,
        onOffer: false,
      },
    });
    console.log(product);
  } catch (error) {
    console.error('Error creating product:', error);
  }
};

createProduct();
