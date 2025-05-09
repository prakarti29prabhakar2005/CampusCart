import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../../Components/Shared/Header";

const InventoryPage = () => {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: "", quantity: "", price: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/products/all"
        );
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchItems();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAddOrUpdate = async () => {
    if (!form.name || !form.quantity || !form.price) return;

    const newItem = {
      name: form.name,
      quantity: parseInt(form.quantity),
      price: parseFloat(form.price),
    };

    if (editId !== null) {
      // Update existing product
      try {
        await axios.put(
          `http://localhost:5001/api/products/${editId}`,
          newItem
        );
        setItems((prev) =>
          prev.map((item) =>
            item._id === editId ? { ...item, ...newItem } : item
          )
        );
      } catch (error) {
        console.error("Error updating product:", error);
      }
      setEditId(null);
    } else {
      // Add new product
      try {
        const response = await axios.post(
          "http://localhost:5001/api/products",
          newItem
        );
        setItems([...items, response.data]);
      } catch (error) {
        console.error("Error adding product:", error);
      }
    }

    setForm({ name: "", quantity: "", price: "" });
  };

  const handleEdit = (item) => {
    setForm({ name: item.name, quantity: item.quantity, price: item.price });
    setEditId(item._id); // Ensure you're using `_id` instead of `id`
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/products/${id}`);
      setItems(items.filter((item) => item._id !== id)); // Ensure you're using `_id`
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <>
      <div>
        <Header />
      </div>

      <div className="container mt-5">
        <h2 className="mb-4" style={{ marginTop: "60px" }}>
          Manage Stock
        </h2>

        <div className="mb-3 row">
          <div className="col-md-3">
            <input
              name="name"
              placeholder="Item Name"
              value={form.name}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-md-3">
            <input
              name="quantity"
              placeholder="Quantity"
              value={form.quantity}
              onChange={handleChange}
              type="number"
              className="form-control"
            />
          </div>
          <div className="col-md-3">
            <input
              name="price"
              placeholder="Price"
              value={form.price}
              onChange={handleChange}
              type="number"
              className="form-control"
            />
          </div>
          <div className="col-md-3">
            <button
              className="btn btn-primary w-100"
              onClick={handleAddOrUpdate}
            >
              {editId ? "Update Item" : "Add Item"}
            </button>
          </div>
        </div>

        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>S.No</th>
              <th>Item</th>
              <th>Qty</th>
              <th>Price (₹)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center">
                  No items found.
                </td>
              </tr>
            ) : (
              items.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(item._id)} // Ensure you're using _id
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default InventoryPage;
