import express from 'express';
import { PrismaClient } from '@prisma/client'
import productsRouter from './routes/products.routes';
const prisma = new PrismaClient();

const app = express ();
app.use("/products", productsRouter)

app.listen(3000, () =>{
    console.log(`app running on port 3000....`);
})

const createProduct = async() =>{
    await prisma.product.create({
        data: {
            product_Thumbnail: "http://dummyimage.com/240x100.png/cc0000/ffffff",
            product_Title :"Coconut - Shredded, Unsweet",
            productDescription :"sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis",
            productCost :17.89,
            onOffer :false
        }
    })
    createProduct();
}