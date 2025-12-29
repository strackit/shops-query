import { GET_SHOP_LIST } from '../queries/get.js';

export async function fetchShops(filter) {
  return GET_SHOP_LIST(filter);
}
