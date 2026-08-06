import { GET_SHOP_LIST } from '../queries/get.js';
import { TRACK_SERVER_META_EVENT } from '../mutation/post.js';

export async function fetchShops(filter) {
  return GET_SHOP_LIST(filter);
}

export async function postTrackMetaEvent(shopId, eventName, eventId, customData, userData) {
  return TRACK_SERVER_META_EVENT(shopId, eventName, eventId, customData, userData);
}
