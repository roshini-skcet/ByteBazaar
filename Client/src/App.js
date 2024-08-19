import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ProductDetails } from "./pages/productDetails/productDetails";
import { ShopContextProvider } from "./context/shop-context";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm"
import Home from './Home'; 
import AdminLogin from './AdminLogin'; 
import { Sidebar } from "phosphor-react";
import AdminDashboard from './AdminDashboard';
import CustomerDetails from './CustomerDetails';
import Customers from './Customers';
import { CustomerProvider } from './CustomerContext';
import Chart from "./Chart";
import Items from "./Items";
import Orders from "./Orders";
import Checkout from "./Checkout";
import Notifications from "./Notifications";
import { NotificationsProvider } from './NotificationsContext';
import Users from "./Users";
import Sales from "./Sales";
function App() {
 
  return (
    <div className="App">
    
      <ShopContextProvider>
      
        <Router>
        <NotificationsProvider>
        <CustomerProvider>
        
          <Navbar />
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/shop" element={<Shop />} />
            
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/dashboard/*" element={<AdminDashboard />} />
            <Route path="/customerdetails" element={<CustomerDetails />} />
            <Route path="/dashboard/customers" element={<Customers />} />
            <Route path="/dashboard/customer-details" element={<CustomerDetails />} />
            <Route path="/dashboard/chart" element={<Chart />} />
            <Route path="/dashboard/contact" element={<Contact />} />
            <Route path="/dashboard/items" element={<Items />} />
            <Route path="/dashboard/orders" element={<Orders />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/dashboard/notifications" element={<Notifications/>} />
            <Route path="/dashboard/users" element={<Users />} />
            <Route path="/dashboard/sales" element={<Sales />} />
          </Routes>
         
          </CustomerProvider>
          </NotificationsProvider>
        </Router>
      
      </ShopContextProvider>
     
    </div>
  );
}

export default App;

