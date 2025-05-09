import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./Components/Shared/Header";
// import ServiceProviderDashboard from "./ServiceProvider/Dashboard";
// import CustomerDashboard from "./Customer/Dashboard";
import LoginPage from "./Components/Auth/LoginPage";
import RegisterPage from "./Components/Auth/RegisterPage";
import ProtectedRoute from "./Routes/ProtectedRoute";
import AdminDashboard from "./Admin/Dashboard/AdminDashboard";
import SplashScreen from "./Components/Auth/SplashScreen";
import ServiceProviderDashboard from "./ServiceProvider/Dashboard/ServiceProviderDashboard";
import InventoryPage from "./ServiceProvider/components/InventoryManagement/InventoryPage";
import ServiceProviderSettings from "./ServiceProvider/components/Setting/ServiceProviderSettings";
import OrderPage from "./ServiceProvider/components/Orders/OrderPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/service-provider-dashboard"
          element={<ServiceProviderDashboard />}
        />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route
          path="/service-provider-dashboard/:id"
          element={<ServiceProviderDashboard />}
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
              <ServiceProviderDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
