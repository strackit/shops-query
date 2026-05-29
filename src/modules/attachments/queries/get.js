import client, { gql } from '../../../utils/apolloClient.js';

export const getAttachments = async ({ typeId, type }) => {
  const query = gql`
    query GetAttachments($typeId: Int, $type: String) {
      attachments(typeId: $typeId, type: $type) {
        id
        userId
        shopId
        productId
        fileSize
        filePath
        createdOn
      }
    }
  `;

  try {
    const { data } = await client.query({
      query,
      variables: { typeId: Number(typeId), type },
    });
    return data.attachments;
  } catch (error) {
    console.error('Error fetching attachments:', error);
    throw error;
  }
};
