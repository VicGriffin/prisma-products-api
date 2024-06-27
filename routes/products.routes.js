import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'An error occurred while fetching products.' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: Number(req.params.id) },
    });
    if (!product) {
      res.status(404).json({ error: 'Product not found.' });
      return;
    }
    res.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'An error occurred while fetching the product.' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { product_Thumbnail, product_Title, productDescription, productCost, onOffer } = req.body;
    const product = await prisma.product.create({
      data: { product_Thumbnail, product_Title, productDescription, productCost, onOffer },
    });
    res.json(product);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'An error occurred while creating the product.' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { product_Thumbnail, product_Title, productDescription, productCost, onOffer } = req.body;
    const product = await prisma.product.update({
      where: { id: Number(req.params.id) },
      data: { product_Thumbnail, product_Title, productDescription, productCost, onOffer },
    });
    res.json(product);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'An error occurred while updating the product.' });
  }
});

export default router;
