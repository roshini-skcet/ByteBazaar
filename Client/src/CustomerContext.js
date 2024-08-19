import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [customerDataList, setCustomerDataList] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/customers');
        setCustomerDataList(response.data);
      } catch (error) {
        console.error("There was an error fetching the customer data!", error);
      }
    };

    fetchCustomers();
  }, []);

  const addCustomerData = async (data) => {
    try {
      const response = await axios.post('http://localhost:8080/api/customers', data);
      setCustomerDataList(prevData => [...prevData, response.data]);
    } catch (error) {
      console.error("There was an error adding the customer data!", error);
    }
  };

  const clearCustomerData = () => {
    setCustomerDataList([]);
  };

  return (
    <CustomerContext.Provider value={{ customerDataList, addCustomerData, clearCustomerData }}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomerContext = () => useContext(CustomerContext);
