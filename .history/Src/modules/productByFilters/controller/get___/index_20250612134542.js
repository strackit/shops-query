// src/modules/productByFilters/controller/get.js
import { fetchProductsByFilters } from '../queries/get.js';

export const getProductsByFiltersController = async (filters) => {
  try {
    const filteredItems = await fetchProductsByFilters(filters);
    console.log('🧪 Filtered Products:', filteredItems);
    return filteredItems;
  } catch (error) {
    console.error('❌ Controller failed to fetch filtered products:', error);
  }
};
