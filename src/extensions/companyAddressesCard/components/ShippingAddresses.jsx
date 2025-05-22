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

const shippingGroups = [
  ['Shipping address 1', 'shipping_address_1'],
  ['Shipping address 2', 'shipping_address_2'],
  ['Shipping address 3', 'shipping_address_3'],
];

const addressProps = ['street', 'city', 'state', 'zip', 'country'];

export const ShippingAddresses = ({ actions, context }) => {
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
      actions.closeOverlay('shipping-addresses-modal');
    },
  });

  return (
    <Modal id="shipping-addresses-modal" title="Edit Shipping Addresses">
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <Flex direction="column" gap="small">
            {shippingGroups.map(([label, baseKey]) => (
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
        <Button onClick={() => actions.closeOverlay('shipping-addresses-modal')}>Cancel</Button>
        <Button type="submit" variant="primary">Save</Button>
      </ModalFooter>
    </Modal>
  );
};
