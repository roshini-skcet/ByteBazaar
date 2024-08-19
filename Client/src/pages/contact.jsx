import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
  padding: 20px;
  background: url('https://media.istockphoto.com/id/846791418/photo/contact-lens.jpg?s=612x612&w=0&k=20&c=4Kjk_0N7JScC_22aSmHCRJZ7AxmK_p_Uq4jgfZovahA=') no-repeat center center;
  background-size: cover; 
  height: 80vh;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #0077ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #0060cb;
  }
`;

export const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      await axios.post('http://localhost:8080/api/contact', formData);
      alert("Your message has been sent!");
      navigate('/'); 
    } catch (error) {
      console.error("There was an error sending the message!", error);
    }
  };

  return (
    <ContactWrapper>
      <Title>Contact Us</Title>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <Input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <Input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <TextArea id="message" name="message" required></TextArea>
        <Button type="submit">Send</Button>
      </Form>
    </ContactWrapper>
  );
};
