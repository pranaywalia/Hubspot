import React from 'react';
import {
  Heading,
  Button,
  Text,
  Flex,
} from '@hubspot/ui-extensions';
import { BillingAddresses } from './BillingAddresses';
import { ShippingAddresses } from './ShippingAddresses';

export const CompanyAddressesCard = ({ actions, context }) => {
  return (
    <Flex direction="column" gap="small">
      <Heading>Company Addresses</Heading>
      <Text>View or update billing and shipping address details.</Text>

      <Flex gap="small">
        <Button
          variant="primary"
          overlay={<BillingAddresses actions={actions} context={context} />}
        >
          Edit Billing Addresses
        </Button>

        <Button
          variant="primary"
          overlay={<ShippingAddresses actions={actions} context={context} />}
        >
          Edit Shipping Addresses
        </Button>
      </Flex>
    </Flex>
  );
};
