import { GET_IPADDRESS } from '../queries/get.js';

// 📦 Controller function
export async function fetchIpAddress() {
  return await GET_IPADDRESS();
}
