import React from 'react';

const Home = () => {
  const backgroundImageStyle = {
    backgroundImage: 'url("https://img.freepik.com/premium-photo/orange-color-wall-abstract-3d-blocks-background-wallpaper_759541-52569.jpg")', // Replace with your image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '90vh', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    textAlign: 'center',
  };

  return (
    <div style={backgroundImageStyle}>
      <h1>Welcome to ByteBazaar!</h1>
  </div>
  );
};

export default Home;
