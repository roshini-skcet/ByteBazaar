import React, { useState } from 'react';
import styled from 'styled-components';

const itemData = [
  {
    id: 1,
    name: "HeadPhone",
    description: "Latest model with high-resolution quality",
    price: "699.99",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6drvlJqxL4tw_Uy7ZIsgWt3b_WD0yn577UQ&s" 
  },
  {
    id: 2,
    name: "Laptop",
    description: "Powerful laptop with fast processor and ample storage",
    price: "1299.99",
    imageUrl: "https://m.media-amazon.com/images/I/61Qe0euJJZL.jpg"
  },
  {
    id: 3,
    name: "Washing Machine",
    description: "Latest model with high-resolution quality",
    price: "699.99",
    imageUrl: "https://media.croma.com/image/upload/v1704793082/Croma%20Assets/Large%20Appliances/Washers%20and%20Dryers/Images/252909_5_ek5ynp.png",
  },
  {
    id: 4,
    name: "Microwave oven",
    description: "Powerful laptop with fast processor and ample storage",
    price: "1299.99",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLdV5YBEH9ZAmEuPddaHnokG6iFMlJPBOfAQ&s"
  },
  {
    id: 5,
    name: "Fridge",
    description: "Powerful laptop with fast processor and ample storage",
    price: "1299.99",
    imageUrl: "https://media3.bosch-home.com/Images/600x/19739335_Bosch_Cooling_All_Products_1200x676.jpg"
  },
  {
    id: 6,
    name: "Smart Watch",
    description: "Powerful laptop with fast processor and ample storage",
    price: "1299.99",
    imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/61EclBYcocL._AC_UL600_SR600,600_.jpg"
  },
  {
    id: 7,
    name: "Iron Box",
    description: "Powerful laptop with fast processor and ample storage",
    price: "1299.99",
    imageUrl: "https://blueberrysindia.com/wp-content/uploads/2022/07/NEON-1024x1024.jpg.webp"
  },
  {
    id: 8,
    name: "LED TV",
    description: "Powerful laptop with fast processor and ample storage",
    price: "1299.99",
    imageUrl: "https://www.sony-asia.com/image/d2a459fc2390dcb292b5b221e2b239a9?fmt=jpeg&wid=1160&qlt=43"
  }
  
  
];

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: row; /* Align items horizontally */
  flex-wrap: wrap; /* Allow items to wrap onto multiple lines */
  justify-content: center; /* Center items horizontally */
  gap: 20px; /* Space between items */
  margin-top: 50px;
  padding: 20px;
`;

const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Add shadow for a better look */
`;

const ItemImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
`;

const ItemName = styled.h3`
  font-size: 24px;
  margin: 10px 0;
`;

const ItemDescription = styled.p`
  font-size: 16px;
  margin: 10px 0;
`;

const ItemPrice = styled.p`
  font-size: 18px;
  color: #0077ff;
  margin: 10px 0;
`;

const FavoriteButton = styled.button`
  padding: 10px 20px;
  background-color: #ff5722;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e64a19;
  }
`;

const Items = () => {
  const [favorites, setFavorites] = useState([]);

  const handleFavorite = (itemId) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(itemId)) {
        return prevFavorites.filter(id => id !== itemId);
      } else {
        return [...prevFavorites, itemId];
      }
    });
  };

  return (
    <ItemsWrapper>
      {itemData.map(item => (
        <ItemCard key={item.id}>
          <ItemImage src={item.imageUrl} alt={item.name} />
          <ItemName>{item.name}</ItemName>
          <ItemDescription>{item.description}</ItemDescription>
          <ItemPrice>{item.price}/-</ItemPrice>
          <button>Add to Shop</button>
        </ItemCard>
      ))}
    </ItemsWrapper>
  );
};

export default Items;
