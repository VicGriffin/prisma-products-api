import { Router } from "express";
 
const router = Router();

router.get( "/", (req,res) =>{
    res.sendend("get all products");
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