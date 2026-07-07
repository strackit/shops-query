import client, { gql } from '../../../utils/apolloClient.js';

const GET_PRODUCT_ATTACHMENTS = gql`
  query GetProductAttachments($filter: ProductAttachmentFilterInput!) {
    getProductAttachments(filter: $filter) {
      id
      shopId
      productId
      fileName
      fileSize
      filePath
      createdOn
    }
  }
`;

export const fetchProductAttachments = async (filter) => {
  try {
    const productId = Number(filter?.productId);
    const shopId = Number(filter?.shopId);

    if (!Number.isFinite(productId) || !Number.isFinite(shopId)) {
      throw new Error('shopId and productId are required numeric values.');
    }

    const { data } = await client.query({
      query: GET_PRODUCT_ATTACHMENTS,
      variables: {
        filter: {
          productId,
          shopId,
        },
      },
    });

    return data?.getProductAttachments ?? [];
  } catch (error) {
    console.error('Error fetching product attachments:', error.message || error);
    throw error;
  }
};
