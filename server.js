const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose")
const shortid = require("shortid")
const app = express();
app.use(bodyParser.json())


mongoose.connect('mongodb://localhost/Bookstoredb',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})

const Product = mongoose.model("products", new mongoose.Schema({
    _id:{type:String, default: shortid.generate},
    id:Number,
    name:String,
    description:String,
    price:Number,
    author:String,
    type:String,
    img:String,
    incart:false,
    category:String
}))

app.get('/api/products',async (req, res)=>{
    const products = await Product.find({})
    res.send(products)
})


app.post("/api/products", async (req, res)=>{
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save()
    res.send(savedProduct)
})

app.delete('/api/products/:id', async(req, res)=>{
    const deletedProduct = await Product.findByIdAndDelete(req.params.id)
    res.send(deletedProduct)
})

const port = process.env.PORT||5000
app.listen(port,()=>{console.log(`sever running on port ${port}`);})