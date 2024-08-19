import React, { useState } from 'react';
import './CustomerDetails.css';
import { useCustomerContext } from './CustomerContext'; 

const CustomerDetails = () => {
  const { addCustomerData, clearCustomerData } = useCustomerContext(); 
  const [customerData, setCustomerData] = useState({
    name: "",
    productName: "",
    transactionId: "",
    price: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCustomerData(customerData); 
    setCustomerData({
      name: "",
      productName: "",
      transactionId: "",
      price: ""
    });
    alert('Customer details added!');
  };

  const handleDelete = () => {
    clearCustomerData(); 
    setCustomerData({
      name: "",
      productName: "",
      transactionId: "",
      price: ""
    });
    alert('All customer details deleted!');
  };

  return (
    <div className="customer-details">
      <h1> Customer Details</h1>
      <form onSubmit={handleSubmit}>
        <table className="details-table">
          <tbody>
            <tr>
              <th>Customer Name</th>
              <td>
                <input
                  type="text"
                  name="name"
                  value={customerData.name}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Product Name</th>
              <td>
                <input
                  type="text"
                  name="productName"
                  value={customerData.productName}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Transaction ID</th>
              <td>
                <input
                  type="text"
                  name="transactionId"
                  value={customerData.transactionId}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Price</th>
              <td>
                <input
                  type="text"
                  name="price"
                  value={customerData.price}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        
        <div className="actions">
          <button type="submit" className="submit-button">Add Order</button>
          <button type="button" className="delete-button" onClick={handleDelete}>Delete</button>
        </div>
      </form>
    </div>
  );
};

export default CustomerDetails;
