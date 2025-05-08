import { useState } from "react";

const InventoryPage = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Notebook", quantity: 10, price: 25 },
    { id: 2, name: "Pen", quantity: 100, price: 5 },
  ]);

  const [form, setForm] = useState({ name: "", quantity: "", price: "" });
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAddOrUpdate = () => {
    if (!form.name || !form.quantity || !form.price) return;

    if (editId !== null) {
      setItems((prev) =>
        prev.map((item) =>
          item.id === editId ? { ...item, ...form, id: editId } : item
        )
      );
      setEditId(null);
    } else {
      const newItem = {
        id: Date.now(),
        ...form,
        quantity: parseInt(form.quantity),
        price: parseFloat(form.price),
      };
      setItems([...items, newItem]);
    }

    setForm({ name: "", quantity: "", price: "" });
  };

  const handleEdit = (item) => {
    setForm({ name: item.name, quantity: item.quantity, price: item.price });
    setEditId(item.id);
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Manage Stock</h2>

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
          <button className="btn btn-primary w-100" onClick={handleAddOrUpdate}>
            {editId ? "Update Item" : "Add Item"}
          </button>
        </div>
      </div>

      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>S.No</th>
            <th>Item</th>
            <th>Item image</th>
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
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td></td>
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
                    onClick={() => handleDelete(item.id)}
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
  );
};

export default InventoryPage;
