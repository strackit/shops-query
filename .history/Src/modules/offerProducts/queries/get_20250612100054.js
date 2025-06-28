import client from '../../../utils/client.js';

const GET_OFFER_PRODUCTS = `
  query {
    offerProducts {
      id
      name
      price
      originalPrice
      discount
    }
  }
`;

export const fetchOfferProducts = async () => {
  try {
    const data = await client.request(GET_OFFER_PRODUCTS);
    return data.offerProducts;
  } catch (error) {
    console.error('❌ Error fetching offer products:', error);
    throw error;
  }
};
