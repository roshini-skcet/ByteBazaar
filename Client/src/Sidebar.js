import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
   
    alert('You have been logged out!');
    
    navigate('/');
  };

  return (
    <div className="sidebar">
      <h2>Admin Dashboard</h2>
      <ul className="sidebar-menu">
        <li><Link to="/dashboard/customers">Customers</Link></li>
        <li><Link to="/dashboard/items">Items</Link></li>
        <li><Link to="/dashboard/users">Users</Link></li>
        <li><Link to="/dashboard/sales">Sales</Link></li>
        <li><Link to="/dashboard/orders">Reviews</Link></li>
        <li><Link to="/dashboard/notifications">Transactions</Link></li>
        <li><Link to="/dashboard/chart">Charts</Link></li>
        <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
      </ul>
    </div>
  );
};

export default Sidebar;
