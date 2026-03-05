import { GET_TEMPLATE_SETTINGS_LIST } from '../queries/get.js';

export async function fetchTemplateSettings(shopId, type) {
  return GET_TEMPLATE_SETTINGS_LIST(shopId, type);
}
