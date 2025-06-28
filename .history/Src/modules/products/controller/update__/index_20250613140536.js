import { updateProduct } from '../../mutations/update.js';

const updateProductController = async (id, input) => {
  try {
    const result = await updateProduct(id, input);
    console.log('✅ Product updated:', result);
    return result;
  } catch (error) {
    console.error('❌ Controller failed to update product:', error.message || error);
    throw error; // Optional: rethrow for upstream handling
  }
};

export