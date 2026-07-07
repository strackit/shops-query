import { fetchProductAttachments } from '../../queries/get.js';

export const getProductAttachmentsController = async (filter) => {
  try {
    return await fetchProductAttachments(filter);
  } catch (error) {
    console.error('Controller failed to fetch product attachments:', error.message || error);
    throw error;
  }
};
