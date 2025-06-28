import { GET_NESTED_CATEGORY } from '../../queries/get.js';
import client from '../../../../utils/client.js';

export const getNestedCategoryController = async (shopId) => {
  console.log('➡️ Controller Received shopId:', shopId);

  try {
    const data = await client.request(GET_NESTED_CATEGORY, {
      filter: {
        shopId: shopId,
      },
    });

    return data.nestedCategory;
  } catch (error) {
    console.error('❌ Controller failed to fetch nested category:', error.message || error);
    throw error;
  }
};
