import express from 'express';
import { PrismaClient } from '@prisma/client';
import productsRoutes from './routes/products.routes.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use('/products', productsRoutes);

app.listen(3002, () => {
  console.log('App running on port 3002...');
});
