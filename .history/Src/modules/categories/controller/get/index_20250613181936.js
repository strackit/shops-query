// src/modules/categories/controller/get_/index.js

import { getCategories } from '../../../queries/get.js';

//  Controller that accepts shopId and returns categories
export const getCategoriesController = async (shopId) => {
  try {
    const categories = await getCategories(shopId);
    console.log(' Categories:', categories);
    return categories;
  } catch (error) {
    console.error(' Controller failed to fetch categories:', error);
    throw error;
  }
};

