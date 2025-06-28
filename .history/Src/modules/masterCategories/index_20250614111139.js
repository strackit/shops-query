// src/modules/categories/index.js
import  getCategoriesController  from './controller/get/index.js';

export const getCategoriesController =  async {
  // Example: Return a static list of categories
  const categories = [
    { id: 1, name: 'Books' },
    { id: 2, name: 'Electronics' },
    { id: 3, name: 'Clothing' }
  ];
  res.json({ categories });
}

