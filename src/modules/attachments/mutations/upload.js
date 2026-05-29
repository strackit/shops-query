import fetch from 'cross-fetch';
import { GRAPHQL_ENDPOINT } from '../../../utils/apolloClient.js';

export const uploadAttachment = async ({ file, shopId, userId, productId }) => {
  const operations = {
    query: `
      mutation UploadFile($file: Upload!, $shopId: Int!, $userId: Int!, $productId: Int!) {
        UploadFile(file: $file, shopId: $shopId, userId: $userId, productId: $productId) {
          id
          userId
          shopId
          productId
          fileSize
          filePath
          createdOn
        }
      }
    `,
    variables: {
      file: null,
      shopId: Number(shopId),
      userId: Number(userId),
      productId: Number(productId),
    },
  };

  const map = {
    '0': ['variables.file'],
  };

  const formData = new FormData();
  formData.append('operations', JSON.stringify(operations));
  formData.append('map', JSON.stringify(map));
  formData.append('0', file);

  try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'apollo-require-preflight': 'true',
      },
      body: formData,
    });
    
    const result = await response.json();
    if (result.errors) {
      throw new Error(result.errors[0].message || 'Error uploading file');
    }
    return result.data.UploadFile;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};
