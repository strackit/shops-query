import graphqlModules from '../index.js';

export const updateOrDeleteCartTest = async () => {
  const input = {
    productId: 1,
    shopId: 1,
    userId: 1,
    update: true, // Set to false if testing deletion
    quantity: 2   // Ignored if delete=true
  };

  try {
    const result = await graphqlModules.cart.updateOrDeleteCartController(input);

    if (result && result.success) {
      console.log('Cart Update/Delete Successful:', JSON.stringify(result, null, 2));
    } else {
      console.warn('Cart Update/Delete executed but did not return expected result:', JSON.stringify(result, null, 2));
    }

    return result;
  } catch (err) {
    console.error('Cart Update/Delete Error:', err);
    return null;
  }
};

// updateOrDeleteCartTest(); // Uncomment to run directly
