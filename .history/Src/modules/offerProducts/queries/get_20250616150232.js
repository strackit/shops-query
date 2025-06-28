//src/modules/offerProducts/queries/get.js
import { gql } from '../../../utils/client.js';
import client from '../../../utils/client.js';

const GET_OFFER_PRODUCTS = gql`
  query GetOfferProducts {
    offerProducts {
      id
      name
      prize
      discount
      featureImage
      shopId
    }
  }
`;

export const fetchOfferProducts = async () => {
  try {
    const data = await client.request(GET_OFFER_PRODUCTS);
    return data.offerProducts;
  } catch (error) {
    console.error('Error fetching offer products:', error.message || error);
    throw error;
  }
};
