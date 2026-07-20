import client, { gql } from '../../../utils/apolloClient.js';
import { GET_SHIPPING_ZONES } from '../queries/index.js';

export const getShippingZoneRates = async (shopId, pincode) => {
  try {
    const { data } = await client.query({
      query: GET_SHIPPING_ZONES,
      variables: { shopId: Number(shopId), pincode: Number(pincode) }
    });

    return data?.shippingZoneRates || [];
  } catch (error) {
    console.error('Error fetching shipping costs:', error.message);
    throw error;
  }
};