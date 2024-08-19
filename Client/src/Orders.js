import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [contactMessages, setContactMessages] = useState([]);

  useEffect(() => {
    const fetchContactMessages = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/contact');
        setContactMessages(response.data);
      } catch (error) {
        console.error("There was an error fetching the contact messages!", error);
      }
    };

    fetchContactMessages();
  }, []);

  const deleteMessage = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/contact/${id}`);
      setContactMessages(contactMessages.filter((message) => message.id !== id));
    } catch (error) {
      console.error("There was an error deleting the message!", error);
    }
  };

  const backgroundStyle = {
    backgroundImage: 'url("https://img.freepik.com/free-vector/background-gradient-with-bokeh-effect_23-2148382073.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: '20px',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  };

  return (
    <div style={backgroundStyle}>
      <h1>Customer Reviews</h1>
      {contactMessages.length > 0 ? (
        contactMessages.map((message, index) => (
          <div key={message.id}>
            <h2>Contact Message {index + 1}:</h2>
            <p><strong>Name:</strong> {message.name}</p>
            <p><strong>Email:</strong> {message.email}</p>
            <p><strong>Reviews:</strong> {message.message}</p>
            <button
              onClick={() => deleteMessage(message.id)}
              style={{
                padding: "10px 10px",
                fontSize: "12px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
                marginTop: "10px",
                width: "100px",
              }}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>No contact messages available.</p>
      )}
    </div>
  );
};

export default Orders;
