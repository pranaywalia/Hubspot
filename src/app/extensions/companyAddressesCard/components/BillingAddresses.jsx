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
  ExpandableSection,
} from '@hubspot/ui-extensions';

const billingGroups = [
  ['Billing address 1', 'billing_address_1'],
  ['Billing address 2', 'billing_address_2'],
  ['Billing address 3', 'billing_address_3'],
];

const addressProps = ['street', 'city', 'state', 'zip', 'country'];

export const BillingAddresses = ({ actions, context }) => {
  const companyId = context?.objectId;

  const {
    handleSubmit,
    formState,
    registerField,
  } = useForm({
    onSubmit: async (formValues) => {
      await actions.updateProperties({
        objectId: companyId,
        objectTypeId: '0-2',
        properties: formValues,
      });
      actions.closeOverlay('billing-addresses-modal');
    },
  });

  return (
    <Modal id="billing-addresses-modal" title="Edit Billing Addresses">
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <Flex direction="column" gap="small">
            {billingGroups.map(([label, baseKey]) => (
              <ExpandableSection title={label} key={baseKey} defaultExpanded={false}>
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
              </ExpandableSection>
            ))}
          </Flex>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button onClick={() => actions.closeOverlay('billing-addresses-modal')}>Cancel</Button>
        <Button type="submit" variant="primary">Save</Button>
      </ModalFooter>
    </Modal>
  );
};
