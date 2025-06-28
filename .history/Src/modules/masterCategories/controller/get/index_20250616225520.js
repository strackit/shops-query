import client, { gql } from '../../../../utils/client.js';  // ✅ Corrected path

import {  } from '../../queries/get.js';

export const getMasterCategoriesController = async (shopId) => {
  console.log('➡️ Controller Received shopId:', shopId);

  const response = await client.query({
    query: GET_MASTER_CATEGORIES,
    variables: {
      filter: { shopId: Number(shopId) },
    },
  });

  return response.data.masterCategories;
};
