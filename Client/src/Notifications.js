import React, { useContext } from 'react';
import { NotificationsContext } from './NotificationsContext';

function Notifications() {
  const { notifications, removeNotification } = useContext(NotificationsContext);

  const backgroundStyle = {
    backgroundImage: 'url("https://img.freepik.com/premium-photo/beautiful-hd-wallpaper-hyper-realistic-colorful-image_1077802-353381.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723420800&semt=ais_hybrid")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: '20px',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    color: 'black', 
  };

  return (
    <div style={backgroundStyle}>
      <h1>Notifications</h1>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index} style={{ marginBottom: '20px' }}>
            <strong>Payment Method:</strong> {notification.method} <br />
            {notification.upiId && (
              <>
                <strong>UPI ID:</strong> {notification.upiId}
                <br />
              </>
            )}
            {notification.mobileNumber && (
              <>
                <strong>Mobile Number:</strong> {notification.mobileNumber}
                <br />
              </>
            )}
            {notification.name && (
              <>
                <strong>Name:</strong> {notification.name}
                <br />
              </>
            )}
            {notification.paytmNumber && (
              <>
                <strong>Paytm Number:</strong> {notification.paytmNumber}
                <br />
              </>
            )}
            {notification.paytmName && (
              <>
                <strong>Name:</strong> {notification.paytmName}
                <br />
              </>
            )}
            <button
              onClick={() => removeNotification(index)}
              style={{
                padding: '5px 5px',
                width: '160px',
                fontSize: '20px',
                backgroundColor: '#ff5722',
                color: '#fff',
                cursor: 'pointer',
                borderRadius: '5px',
                marginTop: '10px',
              }}
            >
              Delete Notification
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
