import { fetchProductsByFilters } from '../../queries/get.js';  

export const getProductsByFiltersController = async (filters) => {
  try {
    const items = await fetchProductsByFilters(filters);
    return items;
  } catch (error) {
    console.error('Controller failed to fetch filtered products:', error);
    throw error; 
  }
};
