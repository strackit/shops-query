import { createOrderByCart } from '../mutations/create.js';

export async function placeOrderByCart(variables) {
    return await createOrderByCart(variables);
}
