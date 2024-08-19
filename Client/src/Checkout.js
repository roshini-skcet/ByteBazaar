import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import QRCode from "qrcode.react";
import QrScanner from "react-qr-scanner";
import "./Checkout.css";
import { NotificationsContext } from "./NotificationsContext";

export const Checkout = () => {
  const [showGooglePayForm, setShowGooglePayForm] = useState(false);
  const [showPaytmForm, setShowPaytmForm] = useState(false);
  const [upiId, setUpiId] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [name, setName] = useState('');
  const [paytmNumber, setPaytmNumber] = useState('');
  const [paytmName, setPaytmName] = useState('');
  const [showQrCode, setShowQrCode] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  const { addNotification } = useContext(NotificationsContext);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/shop");
  };

  const handlePayment = (method) => {
    if (method === "Google Pay") {
      setShowGooglePayForm(true);
      setShowPaytmForm(false);
      setShowQrCode(false);
      setIsScanning(true);
    } else if (method === "Paytm") {
      setShowGooglePayForm(false);
      setShowPaytmForm(true);
      setShowQrCode(false);
      setIsScanning(false);
    } else {
      alert('Your payment has been confirmed');
      addNotification({ method: "Cash on Delivery", details: "Payment completed" });
    }
  };

  const handleGooglePaySubmit = (e) => {
    e.preventDefault();
    addNotification({ method: "Google Pay", upiId, mobileNumber, name });
    setShowQrCode(true);  
    setIsScanning(false);  
    alert('Your payment with Google Pay has been confirmed');
  };

  const handlePaytmSubmit = (e) => {
    e.preventDefault();
    addNotification({ method: "Paytm", paytmNumber, paytmName });
    alert('Your payment with Paytm has been confirmed');
  };

  const handleScan = (data) => {
    if (data) {
      setUpiId(data.text);
      setIsScanning(false);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="checkout-container">
      <h1>Checkout Page</h1>
      <h4>Select your payment method</h4>
      <div className="payment-buttons">
        <button className="payment-button cod" onClick={() => handlePayment("Cash on Delivery")}>
          Pay with Cash on Delivery
        </button>
        <button className="payment-button gpay" onClick={() => handlePayment("Google Pay")}>
          Pay with Google Pay
        </button>
        <button className="payment-button paytm" onClick={() => handlePayment("Paytm")}>
          Pay with Paytm
        </button>
      </div>

      {showGooglePayForm && (
        <form className="gpay-form" onSubmit={handleGooglePaySubmit}>
          <h4>Enter your Google Pay Details</h4>
          <div className="form-group">
            <label htmlFor="upiId">UPI ID:</label>
            <input
              type="text"
              id="upiId"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number:</label>
            <input
              type="text"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">Confirm Payment</button>
        </form>
      )}

      {showPaytmForm && (
        <form className="paytm-form" onSubmit={handlePaytmSubmit}>
          <h4>Enter your Paytm Details</h4>
          <div className="form-group">
            <label htmlFor="paytmNumber">Paytm Number:</label>
            <input
              type="text"
              id="paytmNumber"
              value={paytmNumber}
              onChange={(e) => setPaytmNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="paytmName">Name:</label>
            <input
              type="text"
              id="paytmName"
              value={paytmName}
              onChange={(e) => setPaytmName(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">Confirm Payment</button>
        </form>
      )}

      {isScanning && (
        <QrScanner
          onScan={handleScan}
          onError={handleError}
          style={{ width: "100%", height: "100%" }}
        />
      )}

      {showQrCode && upiId && (
        <div className="qr-code-container">
          <h4>Scan this QR code to pay with Google Pay</h4>
          <QRCode value={`upi://pay?pa=${upiId}&pn=${name}`} />
        </div>
      )}

      <button className="go-back-button" onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default Checkout;
