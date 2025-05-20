import React from "react";

export default function CompanyAddresses({ properties }) {
  // Helper to render one address block
  const renderAddress = (label, prefix) => {
    const street = properties[`${prefix}_street`];
    const city = properties[`${prefix}_city`];
    const state = properties[`${prefix}_state`];
    const zip = properties[`${prefix}_zip`];
    const country = properties[`${prefix}_country`];

    // If none of the fields exist, skip rendering this block
    if (!street && !city && !state && !zip && !country) return null;

    return (
      <div style={{ marginBottom: "1rem" }}>
        <strong>{label}</strong>
        <div>{street || "-"}</div>
        <div>
          {(city || "-")}, {(state || "-")} {(zip || "-")}
        </div>
        <div>{country || "-"}</div>
      </div>
    );
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial, sans-serif", fontSize: "14px" }}>
      {renderAddress("Billing Address 1", "billing_address_1")}
      {renderAddress("Billing Address 2", "billing_address_2")}
      {renderAddress("Billing Address 3", "billing_address_3")}

      {renderAddress("Shipping Address 1", "shipping_address_1")}
      {renderAddress("Shipping Address 2", "shipping_address_2")}
      {renderAddress("Shipping Address 3", "shipping_address_3")}
    </div>
  );
}
