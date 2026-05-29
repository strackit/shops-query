import { uploadAttachment } from '../mutations/upload.js';
import { getAttachments } from '../queries/get.js';

export const uploadAttachmentController = async ({ file, shopId, userId, productId }) => {
  return await uploadAttachment({ file, shopId, userId, productId });
};

export const getAttachmentsController = async ({ typeId, type }) => {
  return await getAttachments({ typeId, type });
};
