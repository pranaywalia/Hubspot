import React from "react";

const CompanyAddresses = ({ addresses }) => {
  if (!addresses || addresses.length === 0) {
    return <div>No addresses found.</div>;
  }

  return (
    <div style={{ fontFamily: "Arial", padding: "10px" }}>
      <h3>Company Addresses</h3>
      <ul>
        {addresses.map((addr, index) => (
          <li key={index}>
            <strong>{addr.label}</strong>: {addr.street}, {addr.city}, {addr.zip}, {addr.country}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyAddresses;
