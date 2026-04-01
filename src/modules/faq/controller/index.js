import { GET_FAQS } from '../queries/get.js';

export async function fetchFaqs({ filter }) {
  return await GET_FAQS({ filter });
}
