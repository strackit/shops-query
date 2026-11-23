import { GET_WHY_CHOOSE_US } from '../queries/get.js';

export async function fetchWhyChooseUs({ filter }) {
  return await GET_WHY_CHOOSE_US({ filter });
}
