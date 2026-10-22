import { GET_WHYCHOOSEUS_DATA } from '../queries/get.js';

export const fetchWhyChooseUs = async (filter) => {
  return await GET_WHYCHOOSEUS_DATA(filter);
};
