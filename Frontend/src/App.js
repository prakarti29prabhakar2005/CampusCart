import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./Components/Shared/Header";
// import InventoryPage from "./ServiceProvider/components/InventoryManagement/InventoryPage";
// import ServiceProviderDashboard from "./ServiceProvider/Dashboard";
// import CustomerDashboard from "./Customer/Dashboard";
import LoginPage from "./Components/Auth/LoginPage";
import RegisterPage from "./Components/Auth/RegisterPage";
import ProtectedRoute from "./Routes/ProtectedRoute";
import AdminDashboard from "./Admin/Dashboard/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Header />} />
        <Route path="/inventory" element={<InventoryPage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/customer"
          element={
            <ProtectedRoute role="customer">
              {/* <CustomerDashboard /> */}
            </ProtectedRoute>
          }
        />
        <Route
          path="/service-provider"
          element={
            <ProtectedRoute role="serviceProvider">
              {/* <ServiceProviderDashboard /> */}
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
