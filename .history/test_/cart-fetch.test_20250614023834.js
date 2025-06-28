import graphqlModules from '../index.js';

export const fetchcartTest = async () => {
  const userId = 1;

  try {
    const data = await graphqlModules.cart.fetchCart(userId);

    if (data && data.length > 0) {
      console.log('Fetched Cart Items:', JSON.stringify(data, null, 2));
    } else {
      console.log('Cart is empty or no data returned.');
    }

    return data;
  } catch (err) {
    console.error('Fetch Cart Error:', err);
    return null;
  }
};

// fetchcartTest(); // Uncomment to run directly
