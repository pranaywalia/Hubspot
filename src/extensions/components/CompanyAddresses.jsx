import React from "react";
import { Card, Property, useRecord } from "@hubspot/ui-extensions";

export default function CompanyAddresses() {
  const record = useRecord();

  const billing1 = {
    street: record.get("billing_address_1_street"),
    city: record.get("billing_address_1_city"),
    state: record.get("billing_address_1_state"),
    zip: record.get("billing_address_1_zip"),
    country: record.get("billing_address_1_country"),
  };

  const billing2 = {
    street: record.get("billing_address_2_street"),
    city: record.get("billing_address_2_city"),
    state: record.get("billing_address_2_state"),
    zip: record.get("billing_address_2_zip"),
    country: record.get("billing_address_2_country"),
  };

  const billing3 = {
    street: record.get("billing_address_3_street"),
    city: record.get("billing_address_3_city"),
    state: record.get("billing_address_3_state"),
    zip: record.get("billing_address_3_zip"),
    country: record.get("billing_address_3_country"),
  };

  const shipping1 = {
    street: record.get("shipping_address_1_street"),
    city: record.get("shipping_address_1_city"),
    state: record.get("shipping_address_1_state"),
    zip: record.get("shipping_address_1_zip"),
    country: record.get("shipping_address_1_country"),
  };

  const shipping2 = {
    street: record.get("shipping_address_2_street"),
    city: record.get("shipping_address_2_city"),
    state: record.get("shipping_address_2_state"),
    zip: record.get("shipping_address_2_zip"),
    country: record.get("shipping_address_2_country"),
  };

  const shipping3 = {
    street: record.get("shipping_address_3_street"),
    city: record.get("shipping_address_3_city"),
    state: record.get("shipping_address_3_state"),
    zip: record.get("shipping_address_3_zip"),
    country: record.get("shipping_address_3_country"),
  };

  function formatAddress(addr) {
    if (!addr.street && !addr.city && !addr.state && !addr.zip && !addr.country) {
      return "N/A";
    }
    return `${addr.street || ""}, ${addr.city || ""}, ${addr.state || ""} ${addr.zip || ""}, ${addr.country || ""}`.replace(/(, )+/g, ", ").replace(/^, |, $/g, "").trim();
  }

  return (
    <Card title="Company Addresses">
      <Property label="Billing Address 1" value={formatAddress(billing1)} />
      <Property label="Billing Address 2" value={formatAddress(billing2)} />
      <Property label="Billing Address 3" value={formatAddress(billing3)} />

      <Property label="Shipping Address 1" value={formatAddress(shipping1)} />
      <Property label="Shipping Address 2" value={formatAddress(shipping2)} />
      <Property label="Shipping Address 3" value={formatAddress(shipping3)} />
    </Card>
  );
}
