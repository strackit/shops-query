// src/modules/categories/index.js
import categories from '../categories/index.js';
import  getCategoriesController  from './controller/get/index.js';

export const getCategoriesController =  async () => {
  // Example: Return a static list of categories
  return [{
    categories
  }];
};

