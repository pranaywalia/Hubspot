import React from 'react';
import {
  Modal,
  ModalBody,
  ModalFooter,
  Heading,
  Button,
  Input,
  Flex,
  Form,
} from '@hubspot/ui-extensions';

const addressFields = [
  ['Billing address 1', 'billing_address_1'],
  ['Billing address 2', 'billing_address_2'],
  ['Billing address 3', 'billing_address_3'],
  ['Shipping address 1', 'shipping_address_1'],
  ['Shipping address 2', 'shipping_address_2'],
  ['Shipping address 3', 'shipping_address_3'],
];

const addressProps = ['street', 'city', 'state', 'zip', 'country'];

export const CompanyAddresses = ({ actions }) => {
  return (
    <Modal id="company-addresses-modal" title="Edit Company Addresses">
      <ModalBody>
        <Form>
          <Flex direction="column" gap="small">
            {addressFields.map(([label, baseKey]) => (
              <Flex key={baseKey} direction="column" gap="small" style={{ paddingBottom: '12px', borderBottom: '1px solid #eee' }}>
                <Heading size="subsection">{label}</Heading>
                {addressProps.map((prop) => (
                  <Input
                    key={`${baseKey}_${prop}`}
                    name={`${baseKey}_${prop}`}
                    label={prop.charAt(0).toUpperCase() + prop.slice(1)}
                  />
                ))}
              </Flex>
            ))}
          </Flex>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button onClick={() => actions.closeOverlay('company-addresses-modal')}>
          Cancel
        </Button>
        <Button
          variant="primary"
          type="submit"
          onClick={() => actions.closeOverlay('company-addresses-modal')}
        >
          Save
        </Button>
      </ModalFooter>
    </Modal>
  );
};
