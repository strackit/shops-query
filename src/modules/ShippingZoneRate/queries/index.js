import client, { gql } from '../../../utils/apolloClient.js';

export const GET_SHIPPING_ZONES = gql`
  query ShippingZoneRates($shopId: Int, $pincode: Int, $filter: ShippingZoneRateFilter) {
    shippingZoneRates(shopId: $shopId, pincode: $pincode, filter: $filter) {
      id
      shopId
      zoneName
      fromPincode
      toPincode
      shippingCharge
      freeShippingThreshold
      createdOn
    }
  }
`;

export const fetchShippingCost = async (shopId, pincode) => {
  try {
    const response = await client.query({
      query: GET_SHIPPING_ZONES,
      variables: { shopId: Number(shopId), pincode: Number(pincode) }
    });
    return response?.data?.shippingZoneRates ?? [];
  } catch (err) {
    console.error('Error fetching shipping costs:', err.message);
    throw err;
  }
};