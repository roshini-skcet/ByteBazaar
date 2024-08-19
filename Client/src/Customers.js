import React from 'react';
import { useCustomerContext } from './CustomerContext';
import './Customers.css'; 
import axios from 'axios';

const Customers = () => {
  const { customerDataList, removeCustomerData } = useCustomerContext(); 
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/customers/${id}`);
      removeCustomerData(id);  
    } catch (error) {
      console.error("There was an error deleting the customer!", error);
    }
  };
  
  return (
    <div className="customers-page">
      <h1>Customers Page</h1>
      {customerDataList.length > 0 ? (
        <div className="customers-list">
          {customerDataList.map((customer, index) => (
            <div key={index} className="customer-card">
              <p><strong>Customer Name:</strong> {customer.name}</p>
              <p><strong>Product Name:</strong> {customer.productName}</p>
              <p><strong>Transaction ID:</strong> {customer.transactionId}</p>
              <p><strong>Price:</strong> {customer.price}</p>
              <button 
                className="delete-button" z
                onClick={() => handleDelete(customer.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No customer data available.</p>
      )}
    </div>
  );
};

export default Customers;
