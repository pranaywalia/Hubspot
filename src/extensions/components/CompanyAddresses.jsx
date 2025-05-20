import React from "react";
import { Card, Grid, Property } from "@hubspot/ui-extensions";

const CompanyAddresses = ({ properties }) => {
  return (
    <Card>
      <Grid columns={2} gap={3}>
        {[
          "billing_address_1_street",
          "billing_address_1_city",
          "billing_address_1_state",
          "billing_address_1_zip",
          "billing_address_1_country",
          "billing_address_2_street",
          "billing_address_2_city",
          "billing_address_2_state",
          "billing_address_2_zip",
          "billing_address_2_country",
          "billing_address_3_street",
          "billing_address_3_city",
          "billing_address_3_state",
          "billing_address_3_zip",
          "billing_address_3_country",
          "shipping_address_1_street",
          "shipping_address_1_city",
          "shipping_address_1_state",
          "shipping_address_1_zip",
          "shipping_address_1_country",
          "shipping_address_2_street",
          "shipping_address_2_city",
          "shipping_address_2_state",
          "shipping_address_2_zip",
          "shipping_address_2_country",
          "shipping_address_3_street",
          "shipping_address_3_city",
          "shipping_address_3_state",
          "shipping_address_3_zip",
          "shipping_address_3_country",
        ].map((prop) => (
          <Property property={prop} key={prop} />
        ))}
      </Grid>
    </Card>
  );
};

export default CompanyAddresses;
