import React from 'react';
import { CrmCard } from '@hubspot/ui-extensions';

export default function CompanyAddresses({ properties }) {
  return (
    <CrmCard title="Company Addresses">
      <div>
        <h3>Billing Address 1</h3>
        <p>{properties.billing_address_1_street}</p>
        <p>{properties.billing_address_1_city}, {properties.billing_address_1_state} {properties.billing_address_1_zip}</p>
        <p>{properties.billing_address_1_country}</p>
        {/* Repeat for other addresses as needed */}
      </div>
    </CrmCard>
  );
}
