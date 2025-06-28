import { updateProduct } from '../../mutations/update.js';

export const updateProductController = async (id, input) => {
  const result = await updateProduct(id, input);
  console.log('✅ Updated Product:', result);
  return result;
};
