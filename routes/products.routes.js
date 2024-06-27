import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching products.' });
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
    res.status(500).json({ error: 'An error occurred while creating the product.' });
  }
});
router.get('/:id', async (req, res) => {
    try {
        const product = await prisma.product.findUnique({
            where: { id: Number(req.params.id) },
        });
            res.json(product);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while fetching the product.' });
            }
});
router.put('/:id', async (req, res) => {
    try {
        const { product_Thumbnail, product_Title, productDescription, productCost, onOffer } =
        req.body;
        const product = await prisma.product.update({
            where: { id: Number(req.params.id) },
            data: { product_Thumbnail, product_Title, productDescription, productCost, onOffer },
            });
            res.json(product);
            } catch (error) {
                res.status(500).json({ error: 'An error occurred while updating the product.' });
            }
});


export default router;