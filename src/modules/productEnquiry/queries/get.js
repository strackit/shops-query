import client, { gql } from '../../../utils/apolloClient.js';

export const GET_PRODUCT_ENQUIRY = gql`
  query GetProductEnquiry($productId: Int!, $shopId: Int!) {
    GetProductEnquiry(productId: $productId, shopId: $shopId) {
      id
      shopId
      productId
      userName
      userMobile
      timestamp
      customerId
    }
  }
`;

export const getProductEnquiry = async (productId, shopId) => {
  try {
    const { data, errors } = await client.query({
      query: GET_PRODUCT_ENQUIRY,
      variables: {
        productId: Number(productId),
        shopId: Number(shopId),
      },
    });

    if (errors?.length) {
      throw new Error(errors.map((error) => error.message).join(', '));
    }

    return data?.GetProductEnquiry ?? [];
  } catch (error) {
    console.error('Error fetching product enquiries:', error.message || error);
    throw error;
  }
};
