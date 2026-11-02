import client, { gql } from '../../../utils/apolloClient.js';

export const ADD_PRODUCT_ENQUIRY = gql`
  mutation AddProductEnquiry($userId: Int!, $productId: Int!, $shopId: Int!) {
    addProductEnquiry(userId: $userId, productId: $productId, shopId: $shopId) {
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

export const addProductEnquiry = async ({ userId, productId, shopId }) => {
  try {
    const { data, errors } = await client.mutate({
      mutation: ADD_PRODUCT_ENQUIRY,
      variables: {
        userId: Number(userId),
        productId: Number(productId),
        shopId: Number(shopId),
      },
    });

    if (errors?.length) {
      throw new Error(errors.map((error) => error.message).join(', '));
    }

    if (!data?.addProductEnquiry) {
      throw new Error('No data returned from add product enquiry mutation');
    }

    return data.addProductEnquiry;
  } catch (error) {
    console.error('Error adding product enquiry:', error.message || error);
    throw error;
  }
};
