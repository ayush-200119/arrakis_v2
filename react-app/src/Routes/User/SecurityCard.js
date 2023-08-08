import React, { useEffect, useState } from 'react';

const SecurityCard = ({ bookId }) => {
  const [security, setSecurity] = useState(null);

  // Simulated database with security details
  const securityDatabase = {
    B001: {
      isin: 'US123456789',
      cusip: '123456789',
      couponRate: 5,
      type: 'Government',
      faceValue: '$1,000',
    },
    B002: {
      isin: 'US987654321',
      cusip: '987654321',
      couponRate: 4.5,
      type: 'Corporate',
      faceValue: '$500 ',
    },
    // Add more security objects
  };

  useEffect(() => {
    // Simulate fetching security details based on bookId
    const fetchedSecurity = securityDatabase[bookId];
    setSecurity(fetchedSecurity);
  }, [bookId]);

  if (!security) {
    return <div>Loading...</div>;
  }

  return (
    <div className="security-card">
      <h3>Security Details for Book ID: {bookId}</h3>
      <p>ISIN: {security.isin}</p>
      <p>CUSIP: {security.cusip}</p>
      <p>Coupon/Interest Rate: {security.couponRate}%</p>
      <p>Type: {security.type}</p>
      <p>Face Value: {security.faceValue}</p>
    </div>
  );
};

export default SecurityCard;