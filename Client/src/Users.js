import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:8080/view');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const backgroundStyle = {
    backgroundImage: 'url("https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yMjJiYXRjaDUta3VsLTAzLmpwZw.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: '20px',
    height: '90vh',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  };

  return (
    <div style={backgroundStyle}>
      <h1>Users</h1>
      {users.length > 0 ? (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <p>Email: {user.email}</p>
              <p>Password: {user.password}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default Users;
