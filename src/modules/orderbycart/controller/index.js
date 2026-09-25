import { createOrderByCart, updateOrderAndStatementStatus } from '../mutations/create.js';

export async function placeOrderByCart(variables) {
    return await createOrderByCart(variables);
}

export async function updatePaymentStatus(variables) {
    return await updateOrderAndStatementStatus(variables);
}
