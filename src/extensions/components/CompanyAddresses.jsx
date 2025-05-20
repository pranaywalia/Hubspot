import React from 'react';
import { Card, Text, Grid, Col } from '@hubspot/ui-extensions';

export default function CompanyAddresses({ context }) {
  const { object } = context;
  const properties = object.properties;

  function renderAddress(prefix) {
    return (
      <div style={{ marginBottom: '12px' }}>
        <Text as="h5">{prefix.replace('_', ' ').toUpperCase()}</Text>
        <Grid columns={1}>
          <Col>
            <Text>Street: {properties[prefix + '_street'] || 'N/A'}</Text>
            <Text>City: {properties[prefix + '_city'] || 'N/A'}</Text>
            <Text>State: {properties[prefix + '_state'] || 'N/A'}</Text>
            <Text>Zip: {properties[prefix + '_zip'] || 'N/A'}</Text>
            <Text>Country: {properties[prefix + '_country'] || 'N/A'}</Text>
          </Col>
        </Grid>
      </div>
    );
  }

  return (
    <Card>
      {renderAddress('billing_address_1')}
      {renderAddress('billing_address_2')}
      {renderAddress('billing_address_3')}
      {renderAddress('shipping_address_1')}
      {renderAddress('shipping_address_2')}
      {renderAddress('shipping_address_3')}
    </Card>
  );
}