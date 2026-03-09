import React, { useState, useEffect } from "react";
import axios from "axios";

function Product() {

  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    stock: ""
  });

  const API = "http://localhost:4000/products";
   const fetchProducts = async () => {
    const res = await axios.get(API);
    setProducts(res.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.name || !form.price || !form.category || !form.stock) {
    alert("All fields required");
    return;
  }
  if (editId) {
    await axios.put(`${API}/${editId}`, form);
    setEditId(null);
  } else {
    await axios.post(API, form);
  }

  setForm({
    name: "",
    price: "",
    category: "",
    stock: ""
  });

  fetchProducts();
};

  const editProduct = (product) => {
     console.log(product.category);
      setForm({
        name: product.name,
        price: product.price,
        category: product.category,
        stock: product.stock
      });

      setEditId(product._id);
    };
    

  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchProducts();
  };
return (
  <div>
   <div className="text-center mb-8">
  <h1 className="text-4xl md:text-5xl font-bold text-blue-600 tracking-wide">
    Vendor Inventory Dashboard
  </h1>
  <p className="text-gray-500 mt-2 text-lg">
    Manage products, categories and stock efficiently
  </p>
</div>
  <div className="container mx-auto mt-10 px-3">
    <div className="card shadow-lg p-4 mb-5 rounded-lg">
      <h3 className="text-center text-3xl font-semibold mb-4">
        {editId ? "Edit Product" : "Add Product"}
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-4">
            <label className="form-label font-semibold">Product Name</label>
            <input type="text" name="name" className="form-control"  placeholder="Enter product name" value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-2">
            <label className="form-label font-semibold ">Price</label>
            <input type="number" name="price" className="form-control"placeholder="Price"value={form.price}
              onChange={handleChange} min="1" required />
          </div>
          <div className="col-md-3">
            <label className="form-label font-semibold ">Category</label>
            <select name="category" className="form-select" value={form.category}onChange={handleChange} required>
              <option value="">Choose</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>
          <div className="col-md-2">
            <label className="form-label font-semibold ">Stock</label>
            <input type="number" name="stock" className="form-control" placeholder="Qty" value={form.stock} onChange={handleChange}
              min="1" required/>
          </div>
          <div className="col-md-1 flex items-end">
            <button
              type="submit"
              className="btn btn-primary w-full"
            >
              {editId ? "Update" : "Add"}
            </button>
          </div>

        </div>
      </form>
    </div>

    <div className="card shadow-lg p-4 rounded-lg">
      <h3 className="text-center text-2xl font-semibold mb-4">
        Inventory
      </h3>
      <div className="table-responsive">
        <table className="table table-hover table-bordered text-center align-middle">

          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {products.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-gray-500">
                  No Products Found
                </td>
              </tr>
            ) : (
              products.map((p) => (
                <tr key={p._id}>
                  <td className="font-medium">{p.name}</td>
                  <td className="text-green-600 font-semibold">₹{p.price}</td>
                  <td>{p.category}</td>
                  <td>{p.stock}</td>

                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => editProduct(p)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteProduct(p._id)}
                    >
                      Remove
                    </button>
                  </td>

                </tr>
              ))
            )}

          </tbody>

        </table>
      </div>

    </div>

  </div>
</div>  
);  
}

export default Product;