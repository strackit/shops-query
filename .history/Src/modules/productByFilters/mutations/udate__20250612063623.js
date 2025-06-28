import { updateFilteredProduct } from '../mutations/update.js';

export const updateFilteredProductsController = async () => {
  try {
    const result = await updateFilteredProduct();
    console.log('✅ Updated Filtered Products:', result);
    return result;
  } catch (error) {
    console.warn('⚠️ Update not available for productByFilters:', error.message);
  }
};
