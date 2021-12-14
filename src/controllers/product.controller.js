const express = require("express");
const multer=require("multer")
const path= require("path")
//let ejs=require("ejs")
const upload =require("../middlewares/upload")

const Product = require("../models/product.model");

//const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.get("/", async(req, res)=>{

  const products= await Product.find().lean().exec()
 // return res.status(201).send(products)

  return res.render("products/productpage",{ products })

})

router.get("/new", async(req, res)=>{
  return res.render("products/new")
})



router.get("/:id", async(req, res)=>{

  const products= await Product.findById(req.params.id).lean().exec()

  return res.render("products/single",{ products })

})

router.post("/single", upload.single("user_image"), async(req, res)=>{

  const products=await Product.create({
    name:req.body.name,
    price:req.body.price,
    image_urls:req.file.path,
  })
  //return res.render("products/single",{products})

   return res.redirect(`/products/${products._id}`)
})
/*
router.post("/", authenticate, async (req, res) => {
  try {
    const user = req.user;

    const product = await Product.create({
      name: req.body.name,
      price: req.body.price,
      image_urls: ["www.google.com"],
      user: user.user._id,
    });

    return res.status(201).json({ product });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

router.get("/", async (req, res) => {
  const products = await Product.find().lean().exec();

  return res.send(products);
});
*/
module.exports = router;
