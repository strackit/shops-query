import { updateProduct } from '../queries/update.js';

export const updateProductController = async (id, input) => {
  try {
    const result = await updateProduct(id, input);
    console.log('✅ Product updated:', result);
    return result;
  } catch (error) {
    console.error('❌ Controller failed to update product:', error);
  }
};
