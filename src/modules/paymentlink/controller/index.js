import { fetchPaymentLink } from '../queries/index.js';

export async function createPaymentLink(filter) {
    return await fetchPaymentLink(filter);
}
