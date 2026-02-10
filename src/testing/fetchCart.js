// src/testing/fetchCart.js
// Script to test the fetch cart function and print the data in the terminal

import { fetchCart } from '../modules/cart/queries/get.js';

async function testFetchCart() {
    const params = {
        shopId: 591,
        userId: 2964
    };

    console.log(`Testing fetchCart with shopId: ${params.shopId}, userId: ${params.userId}...`);

    try {
        const cartItems = await fetchCart(params.shopId, params.userId);
        console.log('Fetched Cart Items:', JSON.stringify(cartItems, null, 2));
        console.log(`Total items in cart: ${cartItems.length}`);
    } catch (error) {
        console.error('Error fetching cart:', error);
    }
}

testFetchCart();
