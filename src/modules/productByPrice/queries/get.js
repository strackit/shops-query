import client, { gql } from '../../../utils/apolloClient.js';

const GET_PRODUCTS_BY_PRICE = gql`
  query ProductByPrice($filter: pricefilter) {
    productByPrice(filter: $filter) {
      id
      isAddedToCart {
        inCart
      }
      name
      prize
      discount
      publish
      tax
      wishList {
        like
      }
      productImage {
        id
        image
        productId
      }
      featureImage
      description
      isOnline
      noStock
    }
  }
`;

export const fetchProductsByPrice = async (price, shopId, userId) => {
  try {
    const response = await client.query({
      query: GET_PRODUCTS_BY_PRICE,
      variables: {
        filter: {
          price,
          shopId,
          userId
        }
      },
    });
    console.log(response);
    return response?.data?.productByPrice ?? [];
  } catch (error) {
    console.error('Error fetching products by price:', error.message || error);
    throw error;
  }
};