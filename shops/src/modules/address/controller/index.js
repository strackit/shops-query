import { GET_ADDRESS } from '../queries/get.js';
// 📥 Controller functions for Address

export async function fetchAddress(filter = {}) {
  return await GET_ADDRESS(filter);
}