import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../../Components/Shared/Header";

const OrderPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/orders/all"
        );
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const handleStatusChange = async (orderId, status) => {
    try {
      await axios.put(`http://localhost:5001/api/orders/${orderId}`, {
        status,
      });
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, status } : order
        )
      );
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-5 pt-5">
        <h2 className="mb-4" style={{ marginTop: "-30px" }}>
          Manage Orders
        </h2>

        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>S.No</th>
              <th>Customer</th>
              <th>Products Ordered</th>
              <th>Total Price (₹)</th>
              <th>Delivery Address</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center">
                  No orders found.
                </td>
              </tr>
            ) : (
              orders.map((order, index) => (
                <tr key={order._id}>
                  <td>{index + 1}</td>
                  <td>
                    {order.customerId
                      ? order.customerId.name
                      : "Customer not found"}
                  </td>{" "}
                  {/* Check if customerId is available */}
                  <td>
                    {order.productsOrdered.map((product, idx) => (
                      <div key={idx}>
                        {product.quantity} x{" "}
                        {product.productId
                          ? product.productId.name
                          : "Unknown Product"}
                        {/* Ensure that productId is populated */}
                      </div>
                    ))}
                  </td>
                  <td>{order.totalPrice}</td>
                  <td>{order.deliveryAddress}</td>
                  <td>
                    <span
                      className={`badge bg-${
                        order.status === "Completed"
                          ? "success"
                          : order.status === "Cancelled"
                          ? "danger"
                          : "warning"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td>
                    {order.status === "Pending" && (
                      <>
                        <button
                          className="btn btn-sm btn-success me-2"
                          onClick={() =>
                            handleStatusChange(order._id, "Completed")
                          }
                        >
                          Mark as Completed
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() =>
                            handleStatusChange(order._id, "Cancelled")
                          }
                        >
                          Cancel Order
                        </button>
                      </>
                    )}
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

export default OrderPage;
