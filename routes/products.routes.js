import { Router } from "express";
import { PrismaClient } from "@prisma/client/extension";

 
const router = Router();
const prisma = newPrismaClient();

router.get( "/", async(req,res) =>{
    try {
        const{product_Thumbnail, product_Title, productDescription,productCost,onOffer} = req.body;
        const newProduct = await prisma.product.create({
            data: {
                product_Thumbnail: product_Thumbnail,
                product_Title: product_Title,
                productDescription: productDescription,
                productCost: productCost,
                onOffer: onOffer
            }
        })
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({success: false, message:e.message})
    }
} )
router.post("/", (req,res) =>{
    res.send("create a product")
} )
router.patch("/:id", (req,res) =>{
    res.send("update a product")
})
router.delete("/:id", (req,res) =>{
    res.send("delete a product")
})

export default router