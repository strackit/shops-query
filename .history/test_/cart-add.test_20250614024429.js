import graphqlModules from '../index.js';

export const testCartAdd = async () => {
  const input = { productId: 1, shopId: 1, userId: 1 };

  try {
    const result = await graphqlModules.cart.addToCartController(input);

    if (result && result.success) {
      console.log('Cart Add Successful:', JSON.stringify(result, null, 2));
    } else {
      console.warn('Cart Add executed but did not return expected result:', JSON.stringify(result, null, 2));
    }

    return result;
  } catch (err) {
    console.error('Cart Add Error:', err);
    return null;
  }
};

// testCartAdd(); // Uncomment to run directly
