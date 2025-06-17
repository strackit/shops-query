import graphqlModules from '../index.js';
import client, { gql } from '../src/utils/client.js';
export const testFetchCart = async () => {
  try {
    const data = await graphqlModules.cart.fetchCart(1);
    console.log(' Fetch Cart Success:', data);
  } catch (err) {
    console.error(' Fetch Cart Error:', err.message || err);
  }
};
