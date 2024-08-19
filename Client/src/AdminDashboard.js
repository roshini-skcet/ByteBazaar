import React from 'react';
import Sidebar from './Sidebar'; 
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-container">
      <Sidebar />
      <div className="admin-dashboard-content">
        
      </div>
    </div>
  );
};

export default AdminDashboard;
