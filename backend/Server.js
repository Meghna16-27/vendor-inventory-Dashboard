const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 4000;
//const SECRET_KEY = "meghna_paul";

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/vendorInventory")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const productSchema = new mongoose.Schema({
  name: { type: String, required: true},
  price: {type: Number,required: true},
  category: { type: String,required: true},
  stock: { type: Number, required: true }
});

const Product = mongoose.model("Product", productSchema);

app.post("/products", async (req, res) => {
  try {

    const { name, price, category, stock } = req.body;

    if (!name || !price || !category || !stock) {
      return res.status(400).json({ message: "All fields required" });
    }

    if (price <= 0 || stock <= 0) {
      return res.status(400).json({ message: "Price and Stock must be positive numbers" });
    }

    const newProduct = new Product({
      name,
      price,
      category,
      stock
    });

    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    console.log("Products fetched:", products);
    res.json(products);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/products/:id", async (req, res) => {
  try {

    const { price, stock } = req.body;

    if (price <= 0 || stock <= 0) {
      return res.status(400).json({ message: "Price and Stock must be positive numbers" });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { price, stock },
      { new: true }
    );
    // console.log("Product updated:", updatedProduct);
    res.json(updatedProduct);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/products/:id", async (req, res) => {
  try {

    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});