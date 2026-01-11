import { GET_CMS } from '../queries/get.js';

export async function fetchcms(shopId) {
  return await GET_CMS(shopId);
}

