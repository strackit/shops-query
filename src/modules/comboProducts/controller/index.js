import { GET_COMBO_PRODUCTS } from '../queries/get.js';

export async function fetchcomboproducts(filter) {
  return await GET_COMBO_PRODUCTS(filter);
}

