import React from 'react';
import { hubspot } from '@hubspot/ui-extensions';
import { CompanyAddressesCard } from './components/CompanyAddressesCard';

hubspot.extend(({ context, actions }) => (
  <CompanyAddressesCard context={context} actions={actions} />
));
