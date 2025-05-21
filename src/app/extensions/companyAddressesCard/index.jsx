import React from 'react';
import {
  Heading,
  Button,
  Text,
  Flex,
  hubspot,
} from '@hubspot/ui-extensions';
import { CompanyAddresses } from './components/CompanyAddresses';

hubspot.extend(({ actions, context }) => (
  <CompanyAddressesCard actions={actions} context={context} />
));

const CompanyAddressesCard = ({ actions, context }) => {
  return (
    <Flex direction="column" gap="small">
      <Heading>Company Addresses</Heading>
      <Text>Edit the addresses associated with this company.</Text>

      <Button
        variant="primary"
        overlay={<CompanyAddresses actions={actions} context={context} />}
      >
        Edit Addresses
      </Button>
    </Flex>
  );
};
