import React from 'react';
import {
  Heading,
  Button,
  Text,
  Flex,
  hubspot,
} from '@hubspot/ui-extensions';
import { CompanyAddresses } from './components/CompanyAddresses';

hubspot.extend(({ actions }) => <CompanyAddressesCard actions={actions} />);

const CompanyAddressesCard = ({ actions }) => {
  return (
    <Flex direction="column" gap="small">
      <Heading>Company Addresses</Heading>
      <Text>Edit the addresses associated with this company.</Text>

      <Button
        variant="primary"
        overlay={<CompanyAddresses actions={actions} />}
      >
        Edit Addresses
      </Button>
    </Flex>
  );
};
