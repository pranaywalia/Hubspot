exports.main = async (context) => {
  const props = context.properties;

  const formatAddress = (prefix, index) => ({
    label: `${prefix.charAt(0).toUpperCase() + prefix.slice(1)} Address ${index}`,
    value: [
      props[`${prefix}_address_${index}_street`] || '',
      `${props[`${prefix}_address_${index}_zip`] || ''} ${props[`${prefix}_address_${index}_city`] || ''}`.trim(),
      props[`${prefix}_address_${index}_state`] || '',
      props[`${prefix}_address_${index}_country`] || ''
    ].filter(Boolean).join('\n')
  });

  return {
    results: [
      {
        objectId: context.parameters.object.objectId,
        title: "Billing Addresses",
        properties: [
          formatAddress("billing", 1),
          formatAddress("billing", 2),
          formatAddress("billing", 3)
        ]
      },
      {
        title: "Shipping Addresses",
        properties: [
          formatAddress("shipping", 1),
          formatAddress("shipping", 2),
          formatAddress("shipping", 3)
        ]
      }
    ]
  };
};
