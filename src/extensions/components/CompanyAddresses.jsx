import React from "react";
import { useEntity, Text } from "@hubspot/ui-extensions";

export default function CompanyAddresses() {
  const { entity } = useEntity();

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "10px" }}>
      <h2>Billing Addresses</h2>
      {[1, 2, 3].map((num) => (
        <div key={`billing-${num}`} style={{ marginBottom: "10px" }}>
          <strong>Billing Address {num}</strong>
          <div><Text property={`billing_address_${num}_street`} /></div>
          <div>
            <Text property={`billing_address_${num}_city`} />,{" "}
            <Text property={`billing_address_${num}_state`} />{" "}
            <Text property={`billing_address_${num}_zip`} />
          </div>
          <div><Text property={`billing_address_${num}_country`} /></div>
        </div>
      ))}

      <h2>Shipping Addresses</h2>
      {[1, 2, 3].map((num) => (
        <div key={`shipping-${num}`} style={{ marginBottom: "10px" }}>
          <strong>Shipping Address {num}</strong>
          <div><Text property={`shipping_address_${num}_street`} /></div>
          <div>
            <Text property={`shipping_address_${num}_city`} />,{" "}
            <Text property={`shipping_address_${num}_state`} />{" "}
            <Text property={`shipping_address_${num}_zip`} />
          </div>
          <div><Text property={`shipping_address_${num}_country`} /></div>
        </div>
      ))}
    </div>
  );
}
