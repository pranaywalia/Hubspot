import React from "react";
import { Card, Property, Section } from "@hubspot/ui-extensions-sdk/renderer";

export default function CompanyAddressesCard({ data }) {
  const { properties } = data;

  // Helper function to render one address block
  const renderAddress = (prefix) => {
    const street = properties[`${prefix}_street`];
    const city = properties[`${prefix}_city`];
    const state = properties[`${prefix}_state`];
    const zip = properties[`${prefix}_zip`];
    const country = properties[`${prefix}_country`];

    if (!street && !city && !state && !zip && !country) {
      return null;
    }

    return (
      <Section title={prefix.replace(/_/g, " ").toUpperCase()}>
        <Property label="Street" value={street || "-"} />
        <Property label="City" value={city || "-"} />
        <Property label="State" value={state || "-"} />
        <Property label="Zip" value={zip || "-"} />
        <Property label="Country" value={country || "-"} />
      </Section>
    );
  };

  return (
    <Card title="Company Addresses">
      {renderAddress("billing_address_1")}
      {renderAddress("billing_address_2")}
      {renderAddress("billing_address_3")}
      {renderAddress("shipping_address_1")}
      {renderAddress("shipping_address_2")}
      {renderAddress("shipping_address_3")}
    </Card>
  );
}
