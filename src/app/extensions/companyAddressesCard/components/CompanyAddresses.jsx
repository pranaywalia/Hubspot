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
  useForm,
} from '@hubspot/ui-extensions';

// Define all address fields to render dynamically
const addressFields = [
  ['Billing address 1', 'billing_address_1'],
  ['Billing address 2', 'billing_address_2'],
  ['Billing address 3', 'billing_address_3'],
  ['Shipping address 1', 'shipping_address_1'],
  ['Shipping address 2', 'shipping_address_2'],
  ['Shipping address 3', 'shipping_address_3'],
];

const addressProps = ['street', 'city', 'state', 'zip', 'country'];

export const CompanyAddresses = ({ actions, context }) => {
  const companyId = context?.objectId;

  const {
    handleSubmit,
    formState,
    registerField,
  } = useForm({
    onSubmit: async (formValues) => {
      try {
        await actions.updateProperties({
          objectId: companyId,
          objectTypeId: '0-2', // 0-2 = Company object in HubSpot
          properties: formValues,
        });
        actions.closeOverlay('company-addresses-modal');
      } catch (error) {
        console.error('Error updating properties:', error);
      }
    },
  });

  return (
    <Modal id="company-addresses-modal" title="Edit Company Addresses">
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <Flex direction="column" gap="small">
            {addressFields.map(([label, baseKey]) => (
              <Flex key={baseKey} direction="column" gap="small" style={{ paddingBottom: '12px', borderBottom: '1px solid #eee' }}>
                <Heading size="subsection">{label}</Heading>
                {addressProps.map((prop) => {
                  const name = `${baseKey}_${prop}`;
                  return (
                    <Input
                      key={name}
                      name={name}
                      label={prop.charAt(0).toUpperCase() + prop.slice(1)}
                      defaultValue={formState[name]}
                      {...registerField(name)}
                    />
                  );
                })}
              </Flex>
            ))}
          </Flex>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button onClick={() => actions.closeOverlay('company-addresses-modal')}>
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </ModalFooter>
    </Modal>
  );
};
