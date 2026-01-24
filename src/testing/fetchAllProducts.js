// testing/fetchAllProducts.js
// Script to test the fetch all products function and print the data in the terminal

import { fetchallProducts } from '../modules/products/queries/get.js';

async function testFetchAllProducts() {
  const params = {
   shopId : 538 ,
   userId : 5
  };
  try {
    const products = await fetchallProducts(params.shopId, null, params.userId, null);
    console.log('Fetched Products:', products);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

testFetchAllProducts();
