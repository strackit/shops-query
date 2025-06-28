import graphqlModules from '../index.js';

export const productsTest = async () => {
  try {
    const data = await graphqlModules.products.getProductsController();

    if (data && data.length > 0) {
      console.log('Products:', JSON.stringify(data, null, 2));
    } else {
      console.log('No products found.');
    }

    return data;
  } catch (err) {
    console.error('Products Fetch Error:', err);
    return null;
  }
};

// productsTest(); // Uncomment to run directly
